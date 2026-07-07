/**
 * Animates a numeric value from zero to a target over a fixed duration,
 * reporting progress through a callback so the view layer stays a pure
 * function of state.
 */
export class CounterAnimator {
  private readonly target: number;
  private readonly durationMs: number;
  private readonly onTick: (value: number) => void;
  private frameId: number | null = null;

  constructor(
    target: number,
    onTick: (value: number) => void,
    durationMs = 2000,
  ) {
    this.target = target;
    this.onTick = onTick;
    this.durationMs = durationMs;
  }

  public run(): void {
    const increment = this.target / (this.durationMs / 16);
    let current = 0;

    const step = (): void => {
      current += increment;

      if (current < this.target) {
        this.onTick(Math.ceil(current));
        this.frameId = requestAnimationFrame(step);
      } else {
        this.onTick(this.target);
        this.frameId = null;
      }
    };

    step();
  }

  public cancel(): void {
    if (this.frameId !== null) {
      cancelAnimationFrame(this.frameId);
      this.frameId = null;
    }
  }
}
