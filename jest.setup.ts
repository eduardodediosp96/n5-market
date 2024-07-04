import "@testing-library/jest-dom";

global.IntersectionObserver = class IntersectionObserver {
  root: Element | null = null;
  rootMargin: string = "0px";
  thresholds: ReadonlyArray<number> = [];
  callback: IntersectionObserverCallback; // Declare the callback property

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }

  observe(target: Element) {
    // Add the target parameter
    this.callback(
      [{ isIntersecting: true, target: target }] as IntersectionObserverEntry[],
      this
    );
  }

  unobserve(_target: Element) {
    // Add the target parameter for completeness
    // Optional: Add cleanup logic if needed
  }

  disconnect() {
    // Optional: Add cleanup logic if needed
  }

  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
};
