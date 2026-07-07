import { useEffect, type RefObject } from "react";
import { ParticleEngine } from "../services/ParticleEngine";

export function useParticleBackground(
  canvasRef: RefObject<HTMLCanvasElement | null>,
): void {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const engine = new ParticleEngine(canvas);
    engine.start();

    return () => engine.stop();
  }, [canvasRef]);
}
