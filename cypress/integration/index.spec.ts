describe('My First Test', () => {
  it('Use forced colors dark theme', () => {
    cy.enableForcedColors('dark').wait(3000);
    expect(true).equals(true);
  })

  it('Use forced colors light theme', () => {
    cy.enableForcedColors('light').wait(3000);
    expect(true).equals(true);
  })

  it('Disable forced colors mode', () => {
    cy.disableForcedColors().wait(3000);
    expect(true).equals(true);
  })
})