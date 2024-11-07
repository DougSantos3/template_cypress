const apiKey = 'APIKey' // Substitua pela sua chave de API
const apiToken = 'APIToken' // Substitua pelo seu token de API
const listId = '{id}' // ID da lista a ser usada
const boardId = '5abbe4b7ddc1b351ef961414' // ID do quadro
const field = '{field}' // Campo específico para atualizar
const name = '{name}' // Nome da lista

// 1. Obter informações de uma lista específica
cy.request({
  method: 'GET',
  url: `https://api.trello.com/1/lists/${listId}?key=${apiKey}&token=${apiToken}`
})

// 2. Atualizar uma lista específica
cy.request({
  method: 'PUT',
  url: `https://api.trello.com/1/lists/${listId}?key=${apiKey}&token=${apiToken}`
})

// 3. Criar uma nova lista
cy.request({
  method: 'POST',
  url: `https://api.trello.com/1/lists?name=${name}&idBoard=${boardId}&key=${apiKey}&token=${apiToken}`
})

// 4. Arquivar todos os cartões de uma lista
cy.request({
  method: 'POST',
  url: `https://api.trello.com/1/lists/${listId}/archiveAllCards?key=${apiKey}&token=${apiToken}`
})

// 5. Mover todos os cartões de uma lista para outra
cy.request({
  method: 'POST',
  url: `https://api.trello.com/1/lists/${listId}/moveAllCards?idBoard=${boardId}&idList=${listId}&key=${apiKey}&token=${apiToken}`
})

// 6. Fechar uma lista
cy.request({
  method: 'PUT',
  url: `https://api.trello.com/1/lists/${listId}/closed?key=${apiKey}&token=${apiToken}`
})

// 7. Mudar a lista de quadro
cy.request({
  method: 'PUT',
  url: `https://api.trello.com/1/lists/${listId}/idBoard?value=${boardId}&key=${apiKey}&token=${apiToken}`
})

// 8. Atualizar um campo específico de uma lista
cy.request({
  method: 'PUT',
  url: `https://api.trello.com/1/lists/${listId}/${field}?key=${apiKey}&token=${apiToken}`
})

// 9. Obter ações relacionadas a uma lista específica
cy.request({
  method: 'GET',
  url: `https://api.trello.com/1/lists/${listId}/actions?key=${apiKey}&token=${apiToken}`
})

// 10. Obter o quadro associado a uma lista específica
cy.request({
  method: 'GET',
  url: `https://api.trello.com/1/lists/${listId}/board?key=${apiKey}&token=${apiToken}`
})

// 11. Obter os cartões de uma lista específica
cy.request({
  method: 'GET',
  url: `https://api.trello.com/1/lists/${listId}/cards?key=${apiKey}&token=${apiToken}`,
  headers: {
    'Accept': 'application/json'
  }
})
