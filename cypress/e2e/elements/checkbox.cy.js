// Agrupa todos os testes relacionados a checkbox
describe('Checkbox Tests', () => {

    // Define um cenário específico
    it('Deve interagir com os checkboxes', () => {

        // Abre página principal
        cy.visit('https://demoqa.com');

        // Navega até seção Elements
        cy.contains('Elements').click();

        // Abre página de checkbox
        cy.contains('Check Box').click();

        // Valida se navegação funcionou
        cy.url().should('include', '/checkbox');


        // ---------- MARCAR CHECKBOX ----------

        // Clica no checkbox principal (Home)
        cy.get('.rc-tree-checkbox').click();

        // Valida se resultado mostra item selecionado
        cy.get('.result').should('contain', 'desktop');


        // ---------- DESMARCAR CHECKBOX ----------

        // Clica novamente para desmarcar
        cy.get('.rc-tree-checkbox').click();

        // Valida que não contém mais texto
        cy.get('.rct-result').should('not.contain', 'desktop');
    });

});