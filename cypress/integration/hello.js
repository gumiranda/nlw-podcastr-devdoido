describe('Our first test', () => {
  it('hello world', () => {
    cy.visit('/');
    cy.findByText(/React Avançado/i).should('be.visible');
  });
});
