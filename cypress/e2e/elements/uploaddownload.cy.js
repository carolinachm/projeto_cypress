describe('upload and download Tests', () => { // Define a suíte de testes chamada "upload and download Tests"

    it('Deve interagir com upload and download', () => { // Define um caso de teste com a ação que será validada
        cy.visit('https://demoqa.com'); // Acessa o site DemoQA no navegador controlado pelo Cypress
        cy.contains('Elements').click(); // Procura o texto "Elements" na tela e clica nele
        cy.contains('Upload and Download').click(); // Procura o menu "Upload and Download" e clica
        cy.url().should('include', '/upload-download'); // Valida se a URL contém "/upload-download" (garante que abriu a página certa)

        // Download
        cy.get('#downloadButton').click(); // Localiza o botão de download pelo ID e executa o clique

        // Upload
        const filePath = 'cypress/fixtures/teste.jpg'; // Define o caminho do arquivo que será enviado (dentro da pasta fixtures do Cypress)
        cy.get('#uploadFile').selectFile(filePath); // Localiza o input de upload e envia o arquivo especificado

        cy.get('#uploadedFilePath').should('contain', 'teste.jpg'); // Verifica se o sistema exibiu o nome do arquivo enviado corretamente
    });
});