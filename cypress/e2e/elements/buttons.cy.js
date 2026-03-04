// describe = agrupa cenários relacionados
// Aqui criamos uma suíte chamada "Button Tests"
describe('Button Tests', () => {

    // it = define um cenário específico
    // Nome deve explicar comportamento validado
    it('Deve interagir com os botões', () => {

        // abre a página principal
        cy.visit('https://demoqa.com');

        // procura texto "Elements" e clica
        // isso navega para seção Elements
        cy.contains('Elements').click();

        // procura texto "Buttons" e clica
        // abre página de testes de botões
        cy.contains('Buttons').click();

        // valida se a URL contém "/buttons"
        // garante que navegação funcionou
        cy.url().should('include', '/buttons');

        // -------- DOUBLE CLICK --------

        // localiza botão pelo id
        // dblclick = simula clique duplo real
        cy.get('#doubleClickBtn').dblclick();

        // valida mensagem exibida após ação
        cy.get('#doubleClickMessage')
          .should('contain', 'You have done a double click');


        // -------- RIGHT CLICK --------

        // ERRO NO SEU CÓDIGO ORIGINAL:
        // comando correto é .rightclick()
        // mas Cypress é case-sensitive
        // correto = .rightclick()
        cy.get('#rightClickBtn').rightclick();

        // valida mensagem
        cy.get('#rightClickMessage')
          .should('contain', 'You have done a right click');


        // -------- CLICK NORMAL --------

        // contains busca botão pelo texto visível
        //cy.contains('Click Me').click();

        // valida resposta
        //cy.get('#dynamicClickMessage')
         // .should('contain', 'You have done a dynamic click');
    });
});