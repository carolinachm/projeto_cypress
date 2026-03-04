describe('Text Box Tests', () => { // Define a suíte de testes chamada "Text Box Tests"

    it('Deve preencher os campos do Text Box', () => { // Define um caso de teste específico
        cy.visit('https://demoqa.com'); // Abre o site DemoQA
        cy.contains('Elements').click(); // Encontra o menu "Elements" e clica
        cy.contains('Text Box').click(); // Acessa a página "Text Box"
        cy.url().should('include', '/text-box'); // Valida se a URL contém "/text-box"

        cy.get('#userName').type('Nina'); // Localiza o campo Nome e digita "Nina"
        cy.get('#userEmail').type('nina@demoqa.com'); // Localiza o campo Email e digita o valor
        cy.get('#currentAddress').type('Rua Exemplo, 123'); // Digita endereço atual
        cy.get('#permanentAddress').type('Avenida Exemplo, 456'); // Digita endereço permanente
        cy.get('#submit').click(); // Clica no botão Submit

        cy.get('#output #name').should('contain', 'Nina'); // Verifica se o nome exibido contém "Nina"
        cy.get('#output #email').should('contain', 'nina@demoqa.com'); // Confere se o email exibido está correto
        cy.get('#output #currentAddress').should('contain', 'Rua Exemplo, 123'); // Confere endereço atual
        cy.get('#output #permanentAddress').should('contain', 'Avenida Exemplo, 456');  // Confere endereço permanente
    }
    );
});