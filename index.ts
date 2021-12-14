const cdpCommand = "Emulation.setEmulatedMedia";
const media = "forced-colors";

function enableForcedColors(theme: ForcedColorsTheme) {
  return cy
    .then(() => {
      return Cypress.automation("remote:debugger:protocol", {
        command: cdpCommand,
        params: {
          media,
          features: [
            { name: media, value: "active" },
            { name: "prefers-color-scheme", value: theme },
          ],
        },
      });
    })
    .then(() => {
      Cypress.log({
        name: "Enable forced colors",
        message: `${theme} theme`,
      });
    })
    .window();
}

function disableForcedColors() {
  return cy
    .then(() => {
      return Cypress.automation("remote:debugger:protocol", {
        command: cdpCommand,
        params: {
          media,
          features: [{ name: media, value: "none" }],
        },
      });
    })
    .then(() => {
      Cypress.log({
        name: "Disable forced colors",
      });
    })
    .window();
}

Cypress.Commands.add("enableForcedColors", enableForcedColors);
Cypress.Commands.add("disableForcedColors", disableForcedColors);
