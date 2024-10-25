### Node usado: 
`20.18.0`

<br>


### Fazer download das bibliotecas:
```bash
npm install
```

### Rodar os cenários de serviços via headless:
```bash
npx cypress run
```

### Para abrir Dashboard do Cypress:

```bash
npx cypress open
```
<br>

### Api do Trello usado para os testes
`https://developer.atlassian.com/cloud/trello/rest/api-group-actions/#api-actions-id-get`

<br>

### Observações
<br>

#### A) Foi mapeado o contrato de um requisição usando a lib Joi: cypress/e2e/services/contracts/boardSchema.ts
<br>

#### B) Testes de contrato: cypress/e2e/services/tests/boards.spec.cy.ts
<br>

#### C) Existe a Integração com o banco postgres e queries nos commands: /home/douglas/Documents/prova_qa/cypress/support/commands/database-commands.js
<br> 

#### D) Commands com diversas funções que podem ser usadas como a inteceptor: interceptBoardsForbidden - cypress/support/commands/commons.js
<br>

#### E) Page objects: cypress/e2e/ui/pages
<br>

#### F) Testes de api: cypress/e2e/services/tests/
<br>

#### G) Teste de interface gráfica: cypress/e2e/ui/tests/accessLoginToContinue.spec.cy.ts
