declare global {
  interface Window {
    holyxeyModal: {
      set: (options: typeof import('../cookiesModal/types').CookiesModalOptions) => void
    }
  }
}

export {}
