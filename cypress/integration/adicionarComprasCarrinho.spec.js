/// <reference types= "cypress" />
import user from '../fixtures/user.json'

describe('Logar e Deslogar na aplicação Saucedemo', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
 })
 
  it('deve poder realizar o login no sistema', () =>{
    cy.realizarLoginSucesso()
  });

  it('adicionar produtos no carrinho', () =>{
    cy.realizarLoginSucesso()
    cy.selecionarProdutoCarrinho()
  });

  it.only('o preço final do carrinho é a soma dos itens adicionados', () =>{
    cy.realizarLoginSucesso()
    cy.selecionarProdutoCarrinho()
    cy.verificarValorTotal()
  }); 

})
