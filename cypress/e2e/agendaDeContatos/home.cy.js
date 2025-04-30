/// <reference types="cypress" />

describe('Teste de Home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app')
    })

    it('Deve renderizar a pagina corretamente', () => {
        cy.get('h1').should('contain', 'Agenda de')
    })
})