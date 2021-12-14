declare type ForcedColorsTheme = "light" | "dark";
declare namespace Cypress {
  interface Chainable {
    /**
     * Enables forced color emulation in the browser
     * @example
     * cy.enableForcedColors('dark')
     * @param theme different forced color themes that can be emulated
     */
    enableForcedColors: (theme: ForcedColorsTheme) => Chainable<Window>
    /**
     * Disables forced color emulation in the browser
     * @example
     * cy.disableForcedColors()
     */
    disableForcedColors: () => Chainable<Window>;
  }
}