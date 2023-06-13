import LoginPage from "./pageObjects/loginPage";

const loginPage = new LoginPage();

Cypress.Commands.add("login", () => {
    loginPage.userNameInput().type(Cypress.env("userName"));
    loginPage.passwordInput().type(Cypress.env("password"));
    loginPage.loginButton().click();
});