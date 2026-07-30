export type AnalyticsEventName =
  | "click_call"
  | "click_request_service"
  | "lead_form_submit"
  | "click_google_reviews"
  | "click_leave_review"
  | "generate_lead"
  | "phone_click"
  | "email_click"
  | "form_start"
  | "form_error";

type AnalyticsValue = string | number | boolean | undefined;
export type AnalyticsPayload = Record<string, AnalyticsValue>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(
  event: AnalyticsEventName,
  payload: AnalyticsPayload = {},
): void {
  if (typeof window === "undefined" || !Array.isArray(window.dataLayer)) return;
  window.dataLayer.push({ event, ...payload });
}

// Google Tag Manager will initialize window.dataLayer in a later sprint.
