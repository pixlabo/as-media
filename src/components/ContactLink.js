"use client";

import { useState } from "react";

/**
 * Robust email / phone link.
 *
 * Why this exists:
 *   `mailto:` and `tel:` only do something when the OS has a default
 *   handler registered. On mobile that's always true (Mail app + Dialer),
 *   so it "just works". On a fresh desktop / Chrome profile there is usually
 *   NO default mail client and no dialer, so a plain click does nothing.
 *
 * Fix:
 *   We keep the native href (so handlers still fire where available) and, on
 *   click, also copy the value to the clipboard and show a small toast. That
 *   way a desktop visitor always walks away with the email / number even when
 *   no app opens.
 *
 * Props:
 *   type     "email" | "phone"
 *   value    human-readable value to copy + show (e.g. "ajay@asmediaservices.com")
 *   href     the mailto:/tel: target
 */
export default function ContactLink({
  type,
  value,
  href,
  className,
  children,
  ...rest
}) {
  const [toast, setToast] = useState(false);

  const handleClick = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(value).then(
        () => {
          setToast(true);
          setTimeout(() => setToast(false), 2200);
        },
        () => {}
      );
    }
    // The native mailto:/tel: still fires via the anchor's default action
    // for devices that have a handler (all mobiles, configured desktops).
  };

  const label = type === "email" ? "Email copied" : "Number copied";

  return (
    <>
      <a href={href} onClick={handleClick} className={className} {...rest}>
        {children}
      </a>
      {toast && (
        <span
          role="status"
          className="fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(18,18,18,0.25)]"
        >
          {label}: {value}
        </span>
      )}
    </>
  );
}
