import { useEffect } from "react";

export function useDynamicFavicon(icons: string[], interval: number = 500) {
  useEffect(() => {
    if (!icons || icons.length === 0) return;

    let index = 0;

    const link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      document.head.appendChild(newLink);
    }

    const id = setInterval(() => {
      const favicon = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
      if (favicon) {
        favicon.href = icons[index % icons.length];
        index++;
      }
    }, interval);

    return () => clearInterval(id);
  }, [icons, interval]);
}