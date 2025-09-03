"use client";

import { useDynamicFavicon } from "./hooks/useDynamicFavicon";

export function FaviconAnimator() {
  useDynamicFavicon(
    ["/favicons/frame1.png", "/favicons/frame2.png", "/favicons/frame3.png"],
    400 // ms interval
  );

  return null; // nothing visible, just runs the effect
}