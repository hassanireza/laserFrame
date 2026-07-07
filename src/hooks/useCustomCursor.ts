import { useEffect, type RefObject } from "react";
import { CursorEngine } from "../services/CursorEngine";

export function useCustomCursor(
  dotRef: RefObject<HTMLDivElement | null>,
  outlineRef: RefObject<HTMLDivElement | null>,
): void {
  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;
    if (!dot || !outline) return;

    const engine = new CursorEngine(dot, outline);
    engine.start();

    return () => engine.stop();
  }, [dotRef, outlineRef]);
}
