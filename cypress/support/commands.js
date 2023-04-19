import user from '../fixtures/user.json'

// -- This is a parent command --
Cypress.Commands.add('realizarLoginSucesso', () => {

    cy.get('[data-test=username]').as('name').type(user.username);
    cy.get('[data-test=password]').as('sobrenome').type(user.password);
    cy.get('[data-test=login-button]').click();

    // Valida se a tela foi exibida
    cy.get('.app_logo').should('be.visible').should('have.text', 'Swag Labs')  // valida se elemento esta visivel e contem o texto 'Swag Labs'
})    

Cypress.Commands.add('selecionarMenu', () => {
    cy.get('button[id=react-burger-menu-btn]').click()
})    

Cypress.Commands.add('realizarLogoutcomSucesso', () => {
    //clica no Logout
    cy.get('#logout_sidebar_link').should('be.visible')
    cy.get('a[id=logout_sidebar_link]').as('Logout').click()

    //verificar se o campo nome e senha está vazio
    cy.get('@name').should('be.empty')
    cy.get('@sobrenome').should('be.empty')
})






//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//export const ELEMENTS ={
    //username: '[data-test=username]',
   // password: '[data-test=password]',
   // loginButton: '[data-test=login-button]'


//}