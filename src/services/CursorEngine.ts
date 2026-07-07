const HOVER_SELECTOR = "a, button, .project-card, [data-cursor-hover]";
const DESKTOP_BREAKPOINT = 768;

/**
 * Controls the custom dot and outline cursor elements, including the
 * magnetic hover state applied when the pointer crosses an interactive
 * element. Disabled automatically on touch and small viewports.
 */
export class CursorEngine {
  private readonly dot: HTMLElement;
  private readonly outline: HTMLElement;
  private observer: MutationObserver | null = null;
  private readonly handleMove: (event: MouseEvent) => void;
  private hoverTargets: NodeListOf<Element> | null = null;

  constructor(dot: HTMLElement, outline: HTMLElement) {
    this.dot = dot;
    this.outline = outline;
    this.handleMove = this.onMouseMove.bind(this);
  }

  public start(): void {
    if (!this.isDesktop()) return;

    window.addEventListener("mousemove", this.handleMove);
    this.bindHoverTargets();

    this.observer = new MutationObserver(() => this.bindHoverTargets());
    this.observer.observe(document.body, { childList: true, subtree: true });
  }

  public stop(): void {
    window.removeEventListener("mousemove", this.handleMove);
    this.observer?.disconnect();
    this.observer = null;
  }

  private isDesktop(): boolean {
    return window.innerWidth > DESKTOP_BREAKPOINT;
  }

  private bindHoverTargets(): void {
    this.hoverTargets = document.querySelectorAll(HOVER_SELECTOR);
    this.hoverTargets.forEach((element) => {
      element.addEventListener("mouseenter", this.onHoverEnter);
      element.addEventListener("mouseleave", this.onHoverLeave);
    });
  }

  private onHoverEnter = (): void => {
    this.outline.style.width = "60px";
    this.outline.style.height = "60px";
    this.outline.style.backgroundColor = "rgba(0, 255, 204, 0.1)";
  };

  private onHoverLeave = (): void => {
    this.outline.style.width = "40px";
    this.outline.style.height = "40px";
    this.outline.style.backgroundColor = "transparent";
  };

  private onMouseMove(event: MouseEvent): void {
    const { clientX, clientY } = event;

    this.dot.style.left = `${clientX}px`;
    this.dot.style.top = `${clientY}px`;

    this.outline.animate(
      { left: `${clientX}px`, top: `${clientY}px` },
      { duration: 500, fill: "forwards" },
    );
  }
}
