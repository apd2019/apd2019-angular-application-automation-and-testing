describe('Scenario 2: Radio Button Validation',() => {

    before(() => {
        //open the website
        cy.visit('http://localhost:4200');
    });
    beforeEach
    it('Should navigate to the Forms > Form Layout', () => {

        //navigate to Forms and Form Layouts
        cy.contains('Forms').click();
        cy.contains('Form Layouts').should('be.visible').click();
    });

    it('Should close the sidebar', () => {

        cy.get('.sidebar-toggle').click();

    });

    it('should find and validate radio buttons',() =>{
        cy.contains('Using the Grid').closest('nb-card').find('form').within(() => {

            cy.get('.col-sm-9 input[type="radio"]').as('radioButtons');

            
            // const radio1 = "nb-radio-group > :nth-child(1)";
            // const radio2 = "nb-radio-group > :nth-child(2)";
            // const radio3 = "nb-radio-group > :nth-child(3)";


            //check radio button 1 is enabled and click
            cy.get('@radioButtons').eq(0).should('be.enabled').click({force: true}).should('be.checked');
            cy.get('@radioButtons').eq(1).should('be.enabled').click({force: true}).should('be.checked');
            cy.get('@radioButtons').eq(0).should('not.be.checked');
            cy.get('@radioButtons').eq(2).should('be.disabled');
        });
    });

     

        
})