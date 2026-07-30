import Script from "next/script";

export function GoogleTagManager() {
  return (
    <>
      <Script id="gtm-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];`}
      </Script>
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtm.js?id=GTM-PGVC8RCW"
      />
    </>
  );
}
