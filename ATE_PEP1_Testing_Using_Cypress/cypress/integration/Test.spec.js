describe('Scenario 1: Form Interaction Test',() => {
    it('Opens the website on localhost:4200, navigates to forms, fills form, and asserts elements',() => {

        //open the website
        cy.visit('http://localhost:4200');

        //nagigate to the Form Layouts page
        cy.contains('Forms').click();
        cy.contains('Form Layouts').should('be.visible').click();

        //close the sidebar and clik the Sign In button
        cy.get('.sidebar-toggle').click();
        cy.get('[data-cy="signInButton"]').should('be.visible').click();
       
        //interact with the horizontal form elements
        cy.get('#inputEmail3').type('abcexample@email.com');
        cy.get('#inputPassword3').type('passsss123');

        //validate sign in button
        cy.get('[data-cy="signInButton"]').scrollIntoView().and('contain', 'Sign in');

    })
})