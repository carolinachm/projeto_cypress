describe('Radio Button Tests', () => { // Define a suíte de testes chamada "Radio Button Tests"

    it('Deve interagir com os radio buttons', () => { // Define um caso de teste individual
        cy.visit('https://demoqa.com'); // Abre o site DemoQA no navegador
        cy.contains('Elements').click(); // Procura um elemento com texto "Elements" e clica nele
        cy.contains('Radio Button').click(); // Procura o menu "Radio Button" e acessa a página
        cy.url().should('include', '/radio-button'); // Valida se a URL contém "/radio-button"

        // Selecionar o radio button "Yes"
        cy.get('input#yesRadio').check({ force: true }); // Marca o radio button com id "yesRadio" mesmo se estiver oculto
        cy.get('.text-success').should('contain', 'Yes'); // Verifica se aparece o texto "Yes" indicando seleção

        // Selecionar o radio button "Impressive"
        cy.get('input#impressiveRadio').check({ force: true }); // Marca o radio button "Impressive"
        cy.get('.text-success').should('contain', 'Impressive'); // Confirma se o texto exibido corresponde à opção

        // Verificar que o radio button "No" está desabilitado
        cy.get('input#noRadio').should('be.disabled'); // Confere se o radio button "No" está desabilitado
    });
});