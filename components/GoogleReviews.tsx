"use client";

import Script from "next/script";
import { trackEvent } from "@/lib/analytics";

// Add the verified Google review URL here when it is available from the business profile.
const googleReviewUrl = "https://g.page/r/CTSVsP_RjqfzEBM/review";

export function GoogleReviews() {
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <div
        className="elfsight-app-7708683b-5b72-4712-b309-d6c767b7e858 min-h-[300px] w-full sm:min-h-[360px]"
        data-elfsight-app-lazy
      />
      <div className="mt-6 flex justify-center">
        {googleReviewUrl ? (
          <a
            href={googleReviewUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() =>
              trackEvent("click_leave_review", {
                page_path: window.location.pathname,
              })
            }
            className="hover:bg-amber-300 inline-flex min-h-12 items-center justify-center rounded-sm bg-amber px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-ink transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber"
          >
            Leave a Google Review
          </a>
        ) : (
          <button
            type="button"
            disabled
            title="Google review URL pending verification"
            className="inline-flex min-h-12 cursor-not-allowed items-center justify-center rounded-sm bg-amber/50 px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-ink/60"
          >
            Leave a Google Review
          </button>
        )}
      </div>
    </>
  );
}
