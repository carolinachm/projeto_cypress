// describe = bloco que agrupa testes relacionados
// Aqui estamos criando uma suíte chamada "Link Tests"
describe('Link Tests', () => {

    // it = cenário individual
    // Nome deve explicar o comportamento esperado
    it('Deve interagir com os links', () => {

        // abre a página principal do site
        cy.visit('https://demoqa.com');

        // encontra elemento com texto "Elements" e clica
        // isso navega para seção de componentes básicos
        cy.contains('Elements').click();

        // abre página de links
        cy.contains('Links').click();

        // valida se URL atual contém "/links"
        // garante que navegação funcionou corretamente
        cy.url().should('include', '/links');


        // ---------- TESTE DO LINK HOME ----------

        // pega elemento pelo id
        // valida que atributo href aponta para URL correta
        cy.get('#simpleLink')
          .should('have.attr', 'href', 'https://demoqa.com');

        // remove atributo target
        // isso evita abrir nova aba (Cypress não suporta múltiplas abas)
        cy.get('#simpleLink')
          .invoke('removeAttr', 'target')
          .click();

        // valida se navegação realmente ocorreu
        cy.url().should('eq', 'https://demoqa.com/');
    });

});