describe('Alert, Frames and Windows Tests', () => { // Define a suíte de testes chamada "Alert, Frames and Windows Tests"
    it('Deve interagir com alertas', () => { // Define o cenário de teste que será executado
        cy.visit('https://demoqa.com'); // Abre o site DemoQA no navegador controlado pelo Cypress

        cy.contains('Alerts, Frame & Windows').click() // Localiza o card/menu com esse texto e clica

        cy.contains('.element-list li', 'Alerts').click() // Dentro da lista lateral, encontra o item "Alerts" e clica

        cy.url().should('include', '/alerts') // Valida se a URL contém "/alerts" garantindo que a navegação funcionou

        cy.get(':nth-child(3) > .element-list > .menu-list > #item-1 > .router-link > .text', { timeout: 10000 }).should('be.visible').click() // Aguarda até 10s esse elemento ficar visível e clica nele

        cy.get('#alertButton').click(); // Clica no botão que dispara um alert simples
        cy.on('window:alert', txt => { // Escuta evento de alerta do navegador
            expect(txt).to.equal('You clicked a button'); // Valida se o texto do alerta é o esperado
        });

        // cy.get('#timerAlertButton').click(); // Clica no botão que dispara alerta após delay
        // cy.on('window:alert', txt => { // Escuta novamente evento de alerta
        //     expect(txt).to.equal('This alert appeared after 5 seconds'); // Valida mensagem do alerta temporizado
        // });

        cy.get('#confirmButton').click(); // Clica no botão que abre confirm dialog
        cy.on('window:confirm', txt => { // Escuta evento de confirmação
            expect(txt).to.equal('Do you confirm action?'); // Valida texto exibido
            return true; // Simula clique no botão OK do confirm
        });

        cy.window().then(win => { // Acessa objeto window do navegador
            cy.stub(win, 'prompt').returns('Cypress Test'); // Mocka o prompt para retornar valor automaticamente
            cy.get('#promtButton').click(); // Clica no botão que dispara o prompt
        });

        cy.get('#promptResult') // Localiza elemento que mostra resultado do prompt
            .should('contain', 'You entered Cypress Test'); // Valida se o valor retornado foi exibido corretamente
    });
});