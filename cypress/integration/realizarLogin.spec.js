/// <reference types= "cypress" />
import user from '../fixtures/user.json'

describe('Logar e Deslogar na aplicação Saucedemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
   
  })

  it('deve poder realizar o login no sistema', () =>{
      cy.realizarLoginSucesso()
  });

    it('deve selecionar menu', () =>{
        cy.realizarLoginSucesso()
        cy.selecionarMenu()
    })    

    it('deve realizar Logout no sistema', () =>{ 
        cy.realizarLoginSucesso()  
        cy.selecionarMenu()
        cy.realizarLogoutcomSucesso()
      
    });

    it('deve informar senha inválida no Login', () =>{ 
      cy.get('[data-test=username]').as('name').type(user.username);
      cy.get('[data-test=password]').as('password').type(user.passwordInvalida);
      cy.get('[data-test=login-button]').click();
      cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    }); 

    it('deve informar usuário inválido no Login', () =>{ 
      cy.get('[data-test=username]').as('name').type(user.usernamelocked);
      cy.get('[data-test=password]').as('password').type(user.password);
      cy.get('[data-test=login-button]').click();
      cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    }); 


});
