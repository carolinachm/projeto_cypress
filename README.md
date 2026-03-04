# 📁 Projeto de Automação de Testes com Cypress

![Tests Status](https://github.com/seu-usuario/seu-repositorio/actions/workflows/cypress-tests.yml/badge.svg)
![Tests Scheduled](https://github.com/seu-usuario/seu-repositorio/actions/workflows/cypress-scheduled.yml/badge.svg)
![Tests Manual](https://github.com/seu-usuario/seu-repositorio/actions/workflows/cypress-manual.yml/badge.svg)

Este projeto contém testes automatizados para a aplicação DemoQA, utilizando o framework [Cypress](https://www.cypress.io/). A estrutura foi organizada para facilitar a manutenção e a escalabilidade dos testes.

---

## 🚀 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) — Framework de testes end-to-end
- JavaScript — Linguagem de programação
- Node.js — Ambiente de execução

---

## 📂 Estrutura do Projeto
```bash
cypress/
├── downloads/ # Arquivos baixados durante os testes
│ └── sampleFile.jpeg
├── e2e/ # Testes organizados por funcionalidades
│ ├── alertframeswindows/ # Testes relacionados a alerts, frames e janelas
│ │ ├── alerts.cy.js
│ │ └── browserwindows.cy.js
│ └── elements/ # Testes da seção "Elements" do DemoQA
│ ├── abrirnavegador.cy.js
│ ├── broken.cy.js
│ ├── buttons.cy.js
│ ├── checkbox.cy.js
│ ├── dynamicproperties.cy.js
│ ├── links.cy.js
│ ├── radiobutton.cy.js
│ ├── textbox.cy.js
│ ├── uploaddownload.cy.js
│ └── webtables.cy.js
│ └── forms/ # Testes da seção "Forms"
│ └── practiceform.cy.js
├── evidencias/ # Evidências de testes (screenshots e vídeos)
│ ├── screenshots/ # Prints de tela gerados em falhas
│ └── videos/ # Vídeos da execução dos testes
│ ├── alertframeswindows/
│ ├── elements/
│ └── forms/
├── fixtures/ # Massa de dados estática
│ ├── example.json
│ └── teste.jpg
└── support/ # Arquivos de suporte e comandos customizados

text

---
```

## 📁 Códigos do Projeto

### 🔹 Testes - Alertas, Frames e Janelas
- [`cypress/e2e/alertframeswindows/alerts.cy.js`](cypress/e2e/alertframeswindows/alerts.cy.js) - Testes relacionados a alertas
- [`cypress/e2e/alertframeswindows/browserwindows.cy.js`](cypress/e2e/alertframeswindows/browserwindows.cy.js) - Testes de manipulação de janelas e abas do navegador

### 🔹 Testes - Elements
- [`cypress/e2e/elements/abrirnavegador.cy.js`](cypress/e2e/elements/abrirnavegador.cy.js) - Teste de abertura do navegador
- [`cypress/e2e/elements/broken.cy.js`](cypress/e2e/elements/broken.cy.js) - Testes de imagens e links quebrados
- [`cypress/e2e/elements/buttons.cy.js`](cypress/e2e/elements/buttons.cy.js) - Testes de interação com botões
- [`cypress/e2e/elements/checkbox.cy.js`](cypress/e2e/elements/checkbox.cy.js) - Testes de seleção de checkboxes
- [`cypress/e2e/elements/dynamicproperties.cy.js`](cypress/e2e/elements/dynamicproperties.cy.js) - Testes de elementos com propriedades dinâmicas
- [`cypress/e2e/elements/links.cy.js`](cypress/e2e/elements/links.cy.js) - Testes de links e navegação
- [`cypress/e2e/elements/radiobutton.cy.js`](cypress/e2e/elements/radiobutton.cy.js) - Testes de botões de rádio
- [`cypress/e2e/elements/textbox.cy.js`](cypress/e2e/elements/textbox.cy.js) - Testes de campos de texto
- [`cypress/e2e/elements/uploaddownload.cy.js`](cypress/e2e/elements/uploaddownload.cy.js) - Testes de upload e download de arquivos
- [`cypress/e2e/elements/webtables.cy.js`](cypress/e2e/elements/webtables.cy.js) - Testes de tabelas web

### 🔹 Testes - Forms
- [`cypress/e2e/forms/practiceform.cy.js`](cypress/e2e/forms/practiceform.cy.js) - Testes do formulário de prática

### 🔹 Fixtures (Massas de Dados)
- [`cypress/fixtures/example.json`](cypress/fixtures/example.json) - Dados de exemplo em formato JSON
- [`cypress/fixtures/teste.jpg`](cypress/fixtures/teste.jpg) - Imagem para testes de upload

### 🔹 Downloads
- [`cypress/downloads/sampleFile.jpeg`](cypress/downloads/sampleFile.jpeg) - Arquivo de exemplo para testes de download

### 🔹 Evidências
- [`cypress/evidencias/screenshots/`](cypress/evidencias/screenshots/) - Pasta de screenshots gerados durante os testes
- [`cypress/evidencias/videos/`](cypress/evidencias/videos/) - Pasta de vídeos das execuções dos testes
  - [`alertframeswindows/`](cypress/evidencias/videos/alertframeswindows/) - Vídeos dos testes de alertas/frames/janelas
  - [`elements/`](cypress/evidencias/videos/elements/) - Vídeos dos testes de elementos
  - [`forms/`](cypress/evidencias/videos/forms/) - Vídeos dos testes de formulários

### 🔹 Support
- [`cypress/support/`](cypress/support/) - Arquivos de suporte (comandos customizados, configurações)

---

## ▶️ Como Executar os Testes

### 1. Pré-requisitos

- Node.js instalado (versão 18 ou superior)
- Gerenciador de pacotes npm ou yarn

### 2. Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git

# Acesse a pasta do projeto
cd seu-repositorio

# Instale as dependências
npm install
3. Executando os testes
Modo interativo (com interface gráfica):

bash
npx cypress open
Modo headless (linha de comando):

bash
npx cypress run
4. Executando testes específicos
bash
# Executar apenas testes de elementos
npx cypress run --spec "cypress/e2e/elements/*.cy.js"

# Executar apenas testes de alertas
npx cypress run --spec "cypress/e2e/alertframeswindows/*.cy.js"

# Executar apenas o teste de formulário
npx cypress run --spec "cypress/e2e/forms/practiceform.cy.js"
📸 Evidências
Screenshots: geradas automaticamente em caso de falha e salvas em cypress/evidencias/screenshots/

Vídeos: gravados durante a execução dos testes e salvos em cypress/evidencias/videos/

📌 Observações
Os testes foram desenvolvidos com foco no site DemoQA

A estrutura de pastas segue boas práticas de organização de projetos com Cypress

Arquivos de download são armazenados em cypress/downloads/

As evidências são organizadas por categoria (alertframeswindows, elements, forms)

🤝 Como Contribuir
Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)

Commit suas mudanças (git commit -m 'Add some AmazingFeature')

Push para a branch (git push origin feature/AmazingFeature)

Abra um Pull Request

📄 Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais informações.

📞 Contato
Autor: [Seu Nome]

Email: [seu.email@example.com]

LinkedIn: Seu Perfil

GitHub: @seu-usuario

Desenvolvido com ❤️ para automação de testes

text

Este README está formatado corretamente em Markdown e inclui:

- ✅ Estrutura completa do projeto
- ✅ Links para todos os arquivos de código
- ✅ Instruções claras de instalação e execução
- ✅ Comandos para executar testes específicos
- ✅ Seção de contribuição
- ✅ Informações de contato
- ✅ Formatação adequada com tabelas, listas e blocos de código

Você pode copiar e colar este conteúdo diretamente no seu arquivo `README.md`!
# projeto_cypress
