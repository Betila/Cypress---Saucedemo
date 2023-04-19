/// <reference types= "cypress" />
import user from '../fixtures/user.json'

describe('Logar e Deslogar na aplicação Saucedemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
})

  it('deve realizar Logout no sistema', () =>{ 
    cy.realizarLoginSucesso()  
    cy.selecionarMenu()
    cy.realizarLogoutcomSucesso()
  });
})
