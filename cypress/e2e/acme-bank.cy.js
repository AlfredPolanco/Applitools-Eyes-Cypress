describe('Acme Bank Login', ()=> {
    beforeEach(() =>{
        cy.eyesOpen({
            appName: 'ACME Bank',
            testName: Cypress.currentTest.title,
        });
    });

    afterEach(() =>{
        cy.eyesClose()
    });

    it('Login to Acme Bank', () =>{
        cy.visit(Cypress.env('baseURL'));

        cy.eyesOpen({
            appName: 'ACME Bank',
            testName: Cypress.currentTest.title,
        });

        cy.eyesCheckWindow({
            tag: "Login page",
            target: 'window',
            fully: true
        });

        cy.get('#username').type('andy')
        cy.get('#password').type('i<3pandas')
        cy.get('#log-in').click()

        cy.eyesCheckWindow({
            tag: "Main page",
            target: 'window',
            fully: true,
            matchLevel: 'Layout'
        });

    });
});