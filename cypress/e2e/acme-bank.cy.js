describe('Acme Bank', ()=> {
    beforeEach(() =>{
        cy.visit(Cypress.env('baseURL'));
        cy.eyesOpen({
            appName: 'ACME Bank',
            testName: Cypress.currentTest.title,
        });
    });

    afterEach(() =>{
        cy.eyesClose()
    });

    it('Login to Acme Bank', () =>{
        cy.eyesCheckWindow({
            tag: "Login page",
            target: 'window',
            fully: true,
            accessibility: [
                {accessibilityType: 'RegularText', selector: '.auth-header'}
            ]
        });

        cy.login();

        cy.eyesCheckWindow({
            tag: "Main page",
            target: 'window',
            fully: true,
            matchLevel: 'Layout'
        });
    });
});