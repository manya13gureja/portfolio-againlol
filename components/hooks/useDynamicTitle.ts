import { useEffect } from "react";

export function useDynamicTitle(
  activeTitles: string[],
  inactiveTitles: string[],
  interval: number = 3000
) {
  useEffect(() => {
    if ((!activeTitles || activeTitles.length === 0) && (!inactiveTitles || inactiveTitles.length === 0)) return;

    let index = 0;
    let isActive = !document.hidden; // start state
    let currentTitles = isActive ? activeTitles : inactiveTitles;

    const updateTitle = () => {
      if (currentTitles.length > 0) {
        document.title = currentTitles[index % currentTitles.length];
        index++;
      }
    };

    const id = setInterval(updateTitle, interval);

    // Listen for tab visibility change
    const handleVisibilityChange = () => {
      isActive = !document.hidden;
      currentTitles = isActive ? activeTitles : inactiveTitles;
      index = 0; // reset when switching
      updateTitle(); // immediate update
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [activeTitles, inactiveTitles, interval]);
}