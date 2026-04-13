declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let initialized = false;

const isBrowser = typeof window !== "undefined";
const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

export const hasAnalyticsConfig = Boolean(measurementId);

export const initGoogleAnalytics = () => {
  if (!isBrowser || !measurementId || initialized) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  const gtag = (...args: unknown[]) => {
    window.dataLayer.push(args);
  };

  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", measurementId, { send_page_view: false });

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  initialized = true;
};

export const trackPageView = (path: string) => {
  if (!measurementId || !window.gtag) {
    return;
  }

  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
};
