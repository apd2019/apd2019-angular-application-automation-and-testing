describe('Scenario 3: Modals and Checkboxes', () => {
    before(() => {
        cy.visit('http://localhost:4200');
});

it('Navigates to Modals and Checkboxes', () => {
    // cy.wait(2000);
    cy.get('.sidebar-toggle').click();
    cy.get('a.ng-tns-c7-7').should('be.visible').click();
    cy.get('.ng-tns-c7-8 > .menu-title').click();
    cy.get('.ng-tns-c7-9 > .menu-title').click();
    cy.get('.ng-tns-c7-10 > .menu-title').click();
    cy.get('.ng-tns-c7-11 > .menu-title').click();
    cy.get('.menu-item.ng-tns-c7-12 > .ng-tns-c7-12').click();
})

it('Clicks the toaster', () => {
    cy.get('.ng-tns-c7-11 > .menu-title').click();
    cy.get('.sidebar-toggle').click();
    cy.get('nb-card-footer > .status-primary').should('be.visible').click();
    cy.contains('Toaster').should('be.visible').click();
})

it('Selects all three checkboxes', () => {
    cy.get('.custom-checkbox').eq(0).click();
    cy.get('.custom-checkbox').eq(1).click();
    cy.get('.custom-checkbox').eq(2).click();

})

it('Clicks only the second checkbox using click()', () => {
    cy.get('.custom-checkbox').eq(1).click();

})
})