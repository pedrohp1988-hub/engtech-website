import Script from "next/script";

export function GoogleReviews() {
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div
        className="elfsight-app-7708683b-5b72-4712-b309-d6c767b7e858 min-h-[300px] w-full sm:min-h-[360px]"
        data-elfsight-app-lazy
      />
    </>
  );
}
