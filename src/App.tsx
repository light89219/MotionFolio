import { lazy, Suspense, useEffect, useLayoutEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import ReactGA from "react-ga4";
import "./App.css";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const MyWorks = lazy(() => import("./pages/MyWorks"));
const Play = lazy(() => import("./pages/Play"));
import { LoadingProvider } from "./context/LoadingProvider";
import { lenis } from "./components/Navbar";

const TRACKING_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
ReactGA.initialize(TRACKING_ID);

/** Paths where the home Lenis stack is absent; document must allow vertical scroll */
const DOCUMENT_SCROLL_ROUTES = ["/myworks", "/play"];

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const useDocScroll = DOCUMENT_SCROLL_ROUTES.some(
      (p) => pathname === p || pathname.startsWith(`${p}/`)
    );

    if (useDocScroll) {
      html.classList.add("body-scroll-doc");
      body.classList.add("body-scroll-doc");
    } else {
      html.classList.remove("body-scroll-doc");
      body.classList.remove("body-scroll-doc");
    }

    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    lenis?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);
    html.scrollTop = 0;
    document.body.scrollTop = 0;
    html.style.scrollBehavior = prev;
  }, [pathname]);

  return null;
};

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Send a pageview event whenever the location changes
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <LoadingProvider>
              <Suspense>
                <MainContainer>
                  <Suspense>
                    <CharacterModel />
                  </Suspense>
                </MainContainer>
              </Suspense>
            </LoadingProvider>
          }
        />
        <Route
          path="/myworks"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MyWorks />
            </Suspense>
          }
        />
        <Route
          path="/play"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Play />
            </Suspense>
          }
        />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
