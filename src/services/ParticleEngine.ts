import type { Point2D } from "../types";

const PARTICLE_COLORS = ["#ff00cc", "#00ffe1"] as const;
const LINK_DISTANCE = 100;
const DENSITY_DIVISOR = 15000;

/**
 * A single animated point rendered on the background canvas.
 * Encapsulates its own position, velocity, and drawing logic.
 */
class Particle {
  public position: Point2D;
  private velocity: Point2D;
  private radius: number;
  private readonly color: string;
  private readonly bounds: { width: number; height: number };

  constructor(bounds: { width: number; height: number }) {
    this.bounds = bounds;
    this.position = {
      x: Math.random() * bounds.width,
      y: Math.random() * bounds.height,
    };
    this.velocity = {
      x: Math.random() * 1 - 0.5,
      y: Math.random() * 1 - 0.5,
    };
    this.radius = Math.random() * 2;
    this.color =
      PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
  }

  public update(): void {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if (this.radius > 0.2) this.radius -= 0.01;
    if (this.radius <= 0.2) this.radius = Math.random() * 2;

    if (this.position.x > this.bounds.width) this.position.x = 0;
    if (this.position.x < 0) this.position.x = this.bounds.width;
    if (this.position.y > this.bounds.height) this.position.y = 0;
    if (this.position.y < 0) this.position.y = this.bounds.height;
  }

  public draw(context: CanvasRenderingContext2D): void {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    context.fill();
  }
}

/**
 * Drives the constellation-style particle field rendered behind the hero
 * and the rest of the page. Owns the canvas render loop, particle pool,
 * and resize handling so the React layer only has to mount and unmount it.
 */
export class ParticleEngine {
  private readonly canvas: HTMLCanvasElement;
  private readonly context: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private animationFrameId: number | null = null;
  private readonly handleResize: () => void;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("ParticleEngine requires a 2D canvas context.");
    }
    this.context = context;
    this.handleResize = this.onResize.bind(this);
  }

  public start(): void {
    this.resizeCanvas();
    this.populate();
    window.addEventListener("resize", this.handleResize);
    this.loop();
  }

  public stop(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    window.removeEventListener("resize", this.handleResize);
  }

  private onResize(): void {
    this.resizeCanvas();
    this.populate();
  }

  private resizeCanvas(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private populate(): void {
    const count = Math.floor(
      (this.canvas.width * this.canvas.height) / DENSITY_DIVISOR,
    );
    this.particles = Array.from(
      { length: count },
      () =>
        new Particle({ width: this.canvas.width, height: this.canvas.height }),
    );
  }

  private connect(): void {
    for (let i = 0; i < this.particles.length; i += 1) {
      for (let j = i; j < this.particles.length; j += 1) {
        const dx = this.particles[i].position.x - this.particles[j].position.x;
        const dy = this.particles[i].position.y - this.particles[j].position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < LINK_DISTANCE) {
          this.context.beginPath();
          this.context.strokeStyle = `rgba(255,255,255,${0.1 - distance / 1000})`;
          this.context.lineWidth = 0.5;
          this.context.moveTo(
            this.particles[i].position.x,
            this.particles[i].position.y,
          );
          this.context.lineTo(
            this.particles[j].position.x,
            this.particles[j].position.y,
          );
          this.context.stroke();
        }
      }
    }
  }

  private loop = (): void => {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const particle of this.particles) {
      particle.update();
      particle.draw(this.context);
    }

    this.connect();
    this.animationFrameId = requestAnimationFrame(this.loop);
  };
}
