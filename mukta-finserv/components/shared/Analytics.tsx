import Script from "next/script";

/**
 * Analytics loader. Picks whichever service is configured via env:
 *   - NEXT_PUBLIC_PLAUSIBLE_DOMAIN → Plausible (preferred, privacy-friendly)
 *   - NEXT_PUBLIC_GA_MEASUREMENT_ID → Google Analytics 4
 * Renders nothing in development or when neither is set.
 */
export function Analytics() {
  if (process.env.NODE_ENV !== "production") return null;

  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (plausibleDomain) {
    return (
      <Script
        defer
        data-domain={plausibleDomain}
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
    );
  }

  if (gaId) {
    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', { anonymize_ip: true });
          `}
        </Script>
      </>
    );
  }

  return null;
}
