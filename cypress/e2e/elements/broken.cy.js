// describe = bloco que agrupa testes relacionados
// Aqui estamos criando uma suíte de testes chamada "Broken Links Tests"
describe('Broken Links Tests', () => {

    // it = cenário de teste individual
    // O nome descreve o comportamento esperado
    it('Deve verificar links quebrados', () => {

        // Abre o site principal
        cy.visit('https://demoqa.com');

        // Procura um elemento visível com texto "Elements" e clica nele
        // Isso navega para a seção Elements
        cy.contains('Elements').click();

        // Procura texto "Broken Links" e clica
        // Abre a página de links quebrados
        cy.contains('Broken Links').click();

        // Valida que a URL atual contém "/broken"
        // Isso confirma que a navegação funcionou corretamente
        cy.url().should('include', '/broken');

        // -------- TESTE DO LINK --------

        // Verifica se o elemento com id "brokenLink"
        // possui atributo href com valor esperado
        cy.get('#brokenLink')
          .should('have.attr', 'href', 'https://demoqa.com');

        // remove atributo target
        // isso impede abrir nova aba (Cypress não suporta múltiplas abas)
        cy.get('#brokenLink')
          .invoke('removeAttr', 'target')
          .click();

        // valida que a navegação ocorreu corretamente
        cy.url().should('eq', 'https://demoqa.com/');

    });
});