import { useRef } from "react";
import { useCustomCursor } from "../hooks/useCustomCursor";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const outlineRef = useRef<HTMLDivElement | null>(null);

  useCustomCursor(dotRef, outlineRef);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={outlineRef} className="cursor-outline" aria-hidden="true" />
    </>
  );
}
