class LoginPage {
    userNameInput() {
        return cy.get('#username');
    };

    passwordInput() {
        return cy.get('#password');
    };

    loginButton() {
        return cy.get('#log-in');
    };
};

export default LoginPage;