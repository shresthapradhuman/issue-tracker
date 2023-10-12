import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://fb2ae7ec910cf24a701eb7c3c37ef664@o4506035276218368.ingest.sentry.io/4506035442548736",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  debug: false,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
