import Script from "next/script";

export function GoogleTagManager() {
  return (
    <>
      <Script id="gtm-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || []; window.dataLayer.push({'gtm.start': new Date().getTime(), event: 'gtm.js'});`}
      </Script>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtm.js?id=GTM-PGVC8RCW"
      />
    </>
  );
}
