"use client";

import * as React from "react";
import Script from "next/script";

const GOOGLE_TRANSLATE_INIT = `
function googleTranslateElementInit(){
  new google.translate.TranslateElement({ pageLanguage: 'en', autoDisplay: false }, 'google_translate_element');
}
`;

/**
 * Loads Google's translate widget only on pageviews where the LanguageSwitcher
 * has actually requested a translation (the `googtrans` cookie is set) —
 * never on a plain English visit. Two reasons:
 *
 * 1. Google's widget does direct DOM manipulation that can race with React's
 *    own reconciliation (a known incompatibility); it was intermittently
 *    closing the navbar's language dropdown mid-interaction while it ran its
 *    background init on pages that didn't even need translation yet.
 * 2. Checked via a client effect (not a server cookies() read in the root
 *    layout) so every page stays statically prerenderable — a server-side
 *    cookie read in the root layout would force the whole app dynamic.
 */
export function TranslateScripts() {
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    setActive(document.cookie.includes("googtrans="));
  }, []);

  if (!active) return null;

  return (
    <>
      <div id="google_translate_element" aria-hidden />
      <Script id="google-translate-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: GOOGLE_TRANSLATE_INIT }} />
      <Script
        id="google-translate-loader"
        strategy="afterInteractive"
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      />
    </>
  );
}
