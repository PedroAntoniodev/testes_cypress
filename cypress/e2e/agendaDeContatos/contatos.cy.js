/// <reference types="cypress" />

describe('Testes na agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    it('Deve incluir um novo contato na agenda', () => {
        cy.get('input[type="text"]').type('Pedro')
        cy.get('input[type="email"]').type('pedro@teste.com')
        cy.get('input[type="tel"]').type('48 99999999')
        cy.get('.adicionar').click()
        
        cy.screenshot('novo-contato')
    })


    it('Deve editar o primeiro contato da agenda', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('input[type="tel"]').clear().type('48 12345678')
        cy.get('.alterar').click()

        cy.screenshot('contato-editado')
    })


    it('Deve excluir o segundo contato da agenda', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()

        cy.screenshot('contato-removido')
    })

})