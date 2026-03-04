// describe = bloco que agrupa testes relacionados a uma funcionalidade
// Serve para organizar a suite de testes e dar contexto
describe('Home DemoQA', () => {

  // it = define um cenário de teste individual
  // O texto descreve exatamente o que o teste valida
  it('Valida que a home carregou', () => {

    // cy.task para log customizado
    cy.task('log', 'Iniciando teste da Home DemoQA');

    // cy.visit()
    // Comando que abre uma página no navegador controlado pelo Cypress
    // Aqui estamos acessando a home do site DemoQA
    cy.visit('https://demoqa.com')

    // cy.contains()
    // Procura um elemento que contenha o texto informado
    // Nesse caso: um elemento visível com texto "Elements"
    cy.contains('Elements')
      // should()
      // Método de validação (assert)
      // Verifica se a condição esperada é verdadeira
      // "be.visible" = valida que o elemento está visível na tela
      .should('be.visible')
      .then(() => {
        // cy.task para log customizado indicando sucesso
        cy.task('log', 'Elemento "Elements" está visível - teste OK');
      });

  })

});