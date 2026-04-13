import { lazy, Suspense, useEffect, useLayoutEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import {
  hasAnalyticsConfig,
  initGoogleAnalytics,
  trackPageView,
} from "./lib/analytics";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));
const MyWorks = lazy(() => import("./pages/MyWorks"));
const Play = lazy(() => import("./pages/Play"));
import { LoadingProvider } from "./context/LoadingProvider";
import { lenis } from "./components/Navbar";

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

const RouteAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (!hasAnalyticsConfig) {
      return;
    }

    initGoogleAnalytics();
    trackPageView(`${location.pathname}${location.search}${location.hash}`);
  }, [location.pathname, location.search, location.hash]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteAnalyticsTracker />
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
