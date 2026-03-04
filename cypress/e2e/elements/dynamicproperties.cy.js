// describe = bloco que agrupa cenários relacionados
describe('Dynamic Properties Tests', () => {

    // it = cenário de teste individual
    it('Deve interagir com as propriedades dinâmicas', () => {

        // abre página principal
        cy.visit('https://demoqa.com');

        // navega para menu Elements
        cy.contains('Elements').click();

        // abre página de propriedades dinâmicas
        cy.contains('Dynamic Properties').click();


        // ---------- BOTÃO QUE HABILITA DEPOIS ----------

        // valida estado inicial → botão deve estar desabilitado
        cy.get('#enableAfter').should('be.disabled')

        // espera até 6s até botão ficar habilitado
        // Cypress automaticamente fica tentando até condição ser verdadeira
        cy.get('#enableAfter', { timeout: 6000 })
          .should('be.enabled')


        // ---------- COR MUDA DEPOIS ----------

        // valida cor inicial do botão
        cy.get('#colorChange')
          .should('have.css', 'color', 'rgb(220, 53, 69)')

        // espera mudança de cor
        cy.get('#colorChange', { timeout: 6000 })
          .should('not.have.css', 'color', 'rgb(220, 53, 69)')


        // ---------- BOTÃO APARECE DEPOIS ----------

        // valida que ainda não está visível
        cy.get('#visibleAfter')
          .should('not.be.visible')

        // espera aparecer
        cy.get('#visibleAfter', { timeout: 6000 })
          .should('be.visible')
    });

});