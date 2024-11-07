const apiKey = 'APIKey' // Substitua pela sua chave de API
const apiToken = 'APIToken' // Substitua pelo seu token de API
const labelId = '{id}' // ID do rótulo
const field = '{field}' // Campo específico para atualizar
const value = '5abbe4b7ddc1b351ef961414' // Exemplo de valor para o campo específico
const name = '{name}' // Nome do rótulo
const color = '{color}' // Cor do rótulo
const idBoard = '{idBoard}' // ID do quadro

// 1. Obter informações de um rótulo específico
cy.request({
  method: 'GET',
  url: `https://api.trello.com/1/labels/${labelId}?key=${apiKey}&token=${apiToken}`
})

// 2. Atualizar um rótulo específico
cy.request({
  method: 'PUT',
  url: `https://api.trello.com/1/labels/${labelId}?key=${apiKey}&token=${apiToken}`
})

// 3. Deletar um rótulo específico
cy.request({
  method: 'DELETE',
  url: `https://api.trello.com/1/labels/${labelId}?key=${apiKey}&token=${apiToken}`
})

// 4. Atualizar um campo específico de um rótulo
cy.request({
  method: 'PUT',
  url: `https://api.trello.com/1/labels/${labelId}/${field}?value=${value}&key=${apiKey}&token=${apiToken}`
})

// 5. Criar um novo rótulo
cy.request({
  method: 'POST',
  url: `https://api.trello.com/1/labels?name=${name}&color=${color}&idBoard=${idBoard}&key=${apiKey}&token=${apiToken}`
})
