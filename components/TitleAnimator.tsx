"use client";
import { useDynamicTitle } from "./hooks/useDynamicTitle";

export function TitleAnimator() {
  useDynamicTitle(
    ["manya", "👋 welcome", "✨ check my work"], // when tab is active
    ["Come back 👀", "You left me 😢", "⚡ New updates"], // when tab is inactive
    2000 // interval in ms
  );

  return null; // no UI needed, only side-effect
}