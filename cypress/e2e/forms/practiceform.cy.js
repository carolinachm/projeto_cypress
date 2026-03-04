describe('Practice Form Tests', () => { // Define a suíte de testes chamada "Practice Form Tests"
    it('Deve preencher o formulário de prática', () => { // Define um cenário de teste específico
        cy.visit('https://demoqa.com'); // Abre o site DemoQA
        cy.contains('Forms').click(); // Localiza o menu "Forms" pelo texto e clica
        cy.contains('Practice Form').click(); // Entra na página "Practice Form"
        cy.url().should('include', '/automation-practice-form'); // Valida se a URL contém o caminho correto

        // Preencher o formulário
        cy.get('#firstName').type('João'); // Digita "João" no campo First Name
        cy.get('#lastName').type('Silva'); // Digita "Silva" no campo Last Name
        cy.get('#userEmail').type('joao.silva@example.com'); // Digita o email
        cy.get('input[name="gender"]').check('Male', { force: true }); // Marca o radio button "Male" (force ignora bloqueios visuais)                         
        cy.get('#userNumber').type('1234567890'); // Digita número de telefone
        cy.get('#dateOfBirthInput').click(); // Abre o seletor de data
        cy.get('.react-datepicker__month-select').select('May'); // Seleciona mês Maio
        cy.get('.react-datepicker__year-select').select('1990'); // Seleciona ano 1990
        cy.get('.react-datepicker__day--015').click(); // Seleciona o dia 15
        cy.get('#subjectsInput').type('Maths{enter}'); // Digita "Maths" e pressiona Enter para selecionar matéria
        cy.get('#hobbiesWrapper').contains('Sports').click(); // Marca hobby "Sports"
        cy.get('#uploadPicture').selectFile('cypress/fixtures/teste.jpg'); // Faz upload do arquivo teste.jpg
        cy.get('#currentAddress').type('Rua Exemplo, 123'); // Digita endereço atual
        cy.get('.css-hlgwow > .css-19bb58m').click().get('#react-select-3-option-0').contains('NCR').click(); // Abre dropdown de estado e seleciona NCR
        cy.get('#city').click().get('#react-select-4-option-0').contains('Delhi').click(); // Abre dropdown de cidade e seleciona Delhi
        

        // Enviar o formulário
        cy.get('#submit').click(); // Clica no botão Submit

        // Verificar a submissão
        cy.get('.modal-content').should('be.visible'); // Verifica se o modal de confirmação apareceu      
        cy.get('.modal-body').should('contain', 'João Silva'); // Confirma nome completo no resultado
        cy.get('.modal-body').should('contain', 'joao.silva@example.com'); // Confirma email
        cy.get('.modal-body').should('contain', 'Male'); // Confirma gênero
        cy.get('.modal-body').should('contain', '1234567890'); // Confirma telefone
        cy.get('.modal-body').should('contain', '15 May,1990'); // Confirma data de nascimento
        cy.get('.modal-body').should('contain', 'Maths'); // Confirma matéria
        cy.get('.modal-body').should('contain', 'Sports'); // Confirma hobby
        cy.get('.modal-body').should('contain', 'teste.jpg'); // Confirma nome do arquivo enviado
        cy.get('.modal-body').should('contain', 'Rua Exemplo, 123'); // Confirma endereço    
        cy.get('.modal-body').should('contain', 'NCR Delhi'); // Confirma estado e cidade
    });
});