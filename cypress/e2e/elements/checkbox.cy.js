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
        cy.get('#result > :nth-child(1)').should('contain', 'You have selected');
        cy.get('#result > :nth-child(2)').should('contain', 'home');
        cy.get('#result > :nth-child(3)').should('contain', 'desktop');
        cy.get('#result > :nth-child(4)').should('contain', 'documents');
        cy.get('#result > :nth-child(5)').should('contain', 'downloads');


    });

});