// Globální typová deklarace pro Google Analytics (gtag)
export {};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}


