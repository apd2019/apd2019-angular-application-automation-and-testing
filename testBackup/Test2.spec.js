describe('Scenario 2: Radio Button Test',() => {
    it('Validates radio buttons behaviour on form layout', () => {

        //open the website
        cy.visit('http://localhost:4200');

        //navigate to Forms and Form Layouts
        cy.contains('Forms').click();
        cy.contains('Form Layouts').should('be.visible').click();

        //close the sidebar and clik the Sign In button
        cy.get('.sidebar-toggle').click();

        //radio button interactions
        //radio button elements
        cy.get('nb-radio-group').as('radios');
    
    //validate the radio1 
        cy.get('@radios').eq(0).should('be.enabled');
    
    })

        
})