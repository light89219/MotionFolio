declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let initialized = false;

const isBrowser = typeof window !== "undefined";
const measurementId = (
  import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined
)?.trim();
const isLikelyValidMeasurementId =
  typeof measurementId === "string" &&
  /^G-[A-Z0-9]{6,}$/i.test(measurementId) &&
  measurementId !== "G-XXXXXXXXXX";

export const hasAnalyticsConfig = Boolean(isLikelyValidMeasurementId);

export const initGoogleAnalytics = () => {
  if (!isBrowser || !isLikelyValidMeasurementId || initialized) {
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
  if (!isLikelyValidMeasurementId || !window.gtag) {
    return;
  }

  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title,
  });
};

if (isBrowser && !isLikelyValidMeasurementId) {
  // Provide setup feedback in dev without interrupting users in production.
  console.warn(
    "Google Analytics is disabled. Set a valid VITE_GA_MEASUREMENT_ID in your .env file."
  );
}
