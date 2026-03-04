describe('Alert, Frames and Windows Tests', () => { // Define a suíte de testes relacionada a alertas, frames e janelas

  it('Valida abertura de novas páginas', () => { // Define o cenário de teste que valida abertura de abas/janelas

    cy.visit('https://demoqa.com') // Abre o site principal DemoQA
   
    cy.contains('Alerts, Frame & Windows').click() // Localiza o card com esse texto e clica
    cy.contains('Browser Windows').click() // Acessa a seção "Browser Windows"

    // -------- NEW TAB --------
    cy.get('#tabButton').click(); // Clica no botão que abriria nova aba
     //cy.get('#tabButton') // Seleciona novamente o botão
     //.should('have.attr','href','https://demoqa.com/sample') // Verifica se o link configurado é o correto

    cy.visit('https://demoqa.com/sample') // Acessa manualmente a URL da nova aba (Cypress não troca abas nativamente)
    cy.url().should('include','/sample') // Confirma que está na página sample

    cy.go('back') // Volta para a página anterior

    // -------- NEW WINDOW --------
    cy.get('#windowButton').click(); // Clica no botão que abriria nova janela
     //cy.get('#windowButton').should('have.attr','href','https://demoqa.com/sample') // Valida o link configurado

    cy.visit('https://demoqa.com/sample') // Navega manualmente para simular abertura da nova janela
    cy.url().should('include','/sample') // Valida URL

    cy.go('back') // Retorna para tela anterior

    // -------- MESSAGE WINDOW --------
    cy.get('#messageWindowButton').click(); // Clica no botão que abriria janela de mensagem
     //cy.get('#messageWindowButton') // Seleciona novamente o botão
      //.should('have.attr','href','https://demoqa.com/sample') // Confirma se o link está correto

    cy.visit('https://demoqa.com/sample') // Navega manualmente para página destino
    cy.url().should('include','/sample') // Valida URL final

  })

})