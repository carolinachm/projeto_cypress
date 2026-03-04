describe('Web Tables Tests', () => { // Define a suíte de testes chamada "Web Tables Tests"

    it('Deve interagir com as web tables', () => { // Define um cenário de teste específico
        cy.visit('https://demoqa.com'); // Abre o site DemoQA no navegador controlado pelo Cypress
        cy.contains('Elements').click(); // Localiza o menu "Elements" pelo texto e clica nele
        cy.contains('Web Tables').click(); // Acessa a seção "Web Tables"
        cy.url().should('include', '/webtables'); // Valida se a URL contém "/webtables" garantindo que a navegação funcionou

        // Adicionar um novo registro
        cy.get('#addNewRecordButton').click(); // Clica no botão para adicionar um novo registro na tabela
        cy.get('#firstName').type('Nina'); // Digita "Nina" no campo First Name
        cy.get('#lastName').type('Silva'); // Digita "Silva" no campo Last Name
        cy.get('#userEmail').type('nina.silva@example.com'); // Digita o email no campo Email        
        cy.get('#age').type('30'); // Digita 30 no campo Age
        cy.get('#salary').type('5000'); // Digita 5000 no campo Salary
        cy.get('#department').type('TI'); // Digita "TI" no campo Department
        cy.get('#submit').click(); // Clica no botão Submit para salvar o registro

        // Verificar que o novo registro foi adicionado
        cy.get('tbody > :nth-child(4) > :nth-child(1)').should('contain', 'Nina'); // Confirma se o nome foi inserido na linha 4 coluna 1
        cy.get('tbody > :nth-child(4) > :nth-child(2)').should('contain', 'Silva'); // Confirma o sobrenome na linha 4 coluna 2
        cy.get('tbody > :nth-child(4) > :nth-child(3)').should('contain', '30'); // Confirma idade na linha 4 coluna 3
        cy.get(':nth-child(4) > :nth-child(5)').should('contain', '5000'); // Confirma salário na linha 4 coluna 5
        //cy.get('.col-xl-3').should('contain', 'TI'); // Validação do departamento comentada (não executa)

        // Editar o registro
        //cy.get('.col-xl-3').click(); // (Comentado) clicaria no botão editar
        //cy.get('#firstName').clear().type('Nina Editada'); // (Comentado) limparia o nome e escreveria novo valor
        //cy.get('#submit').click(); // (Comentado) salvaria alteração

        // Verificar que o registro foi editado
        //cy.get('tbody > :nth-child(4) > :nth-child(1)').should('contain', 'Nina Editada'); // (Comentado) validaria nome alterado

        // Excluir o registro
        //cy.get('tbody > :nth-child(4) > :nth-child(6) > #delete-record-4').click(); // (Comentado) excluiria registro

        // Verificar que o registro foi excluído
        //cy.get('tbody').should('not.contain', 'Nina Editada'); // (Comentado) verificaria se registro sumiu          
                           
    });
});