import { useRef } from "react";
import { useParticleBackground } from "../hooks/useParticleBackground";

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  useParticleBackground(canvasRef);

  return <canvas id="bg-canvas" ref={canvasRef} aria-hidden="true" />;
}
