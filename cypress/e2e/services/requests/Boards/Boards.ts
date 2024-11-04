const API_KEY = 'suaAPIKey'
const API_TOKEN = 'seuAPIToken'
const boardId = 'seuBoardId' // Substitua com o ID do board que deseja usar

describe('Trello API Requests', () => {

  it('GET board memberships', () => {
    cy.request({
      method: 'GET',
      url: `https://api.trello.com/1/boards/${boardId}/memberships?key=${API_KEY}&token=${API_TOKEN}`,
      headers: { 'Accept': 'application/json' }
    }).then((response) => {
      expect(response.status).to.eq(200)
      cy.log(response.body)
    })
  })

  it('GET board details', () => {
    cy.request({
      method: 'GET',
      url: `https://api.trello.com/1/boards/${boardId}?key=${API_KEY}&token=${API_TOKEN}`,
      headers: { 'Accept': 'application/json' }
    }).then((response) => {
      expect(response.status).to.eq(200)
      cy.log(response.body)
    })
  })

  it('PUT update board', () => {
    cy.request({
      method: 'PUT',
      url: `https://api.trello.com/1/boards/${boardId}?key=${API_KEY}&token=${API_TOKEN}`,
      headers: { 'Accept': 'application/json' },
      body: { name: 'Updated Board Name' } // Exemplo de atualização, modifique conforme necessário
    }).then((response) => {
      expect(response.status).to.eq(200)
      cy.log(response.body)
    })
  })

  it('DELETE board', () => {
    cy.request({
      method: 'DELETE',
      url: `https://api.trello.com/1/boards/${boardId}?key=${API_KEY}&token=${API_TOKEN}`
    }).then((response) => {
      expect(response.status).to.eq(200)
      cy.log(response.body)
    })
  })

  it('GET board actions', () => {
    cy.request({
      method: 'GET',
      url: `https://api.trello.com/1/boards/${boardId}/actions?key=${API_KEY}&token=${API_TOKEN}`
    }).then((response) => {
      expect(response.status).to.eq(200)
      cy.log(response.body)
    })
  })

  it('POST create label on board', () => {
    cy.request({
      method: 'POST',
      url: `https://api.trello.com/1/boards/${boardId}/labels?name=TestLabel&color=green&key=${API_KEY}&token=${API_TOKEN}`
    }).then((response) => {
      expect(response.status).to.eq(200)
      cy.log(response.body)
    })
  })

  it('PUT update board member', () => {
    const email = 'example@example.com'
    const fullName = 'Member Full Name'
    cy.request({
      method: 'PUT',
      url: `https://api.trello.com/1/boards/${boardId}/members?email=${email}&key=${API_KEY}&token=${API_TOKEN}`,
      headers: { 'Content-Type': 'application/json' },
      body: {
        fullName: fullName
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      cy.log(response.body)
    })
  })

  it('POST create new board', () => {
    const boardName = 'New Board Name'
    cy.request({
      method: 'POST',
      url: `https://api.trello.com/1/boards/?name=${boardName}&key=${API_KEY}&token=${API_TOKEN}`
    }).then((response) => {
      expect(response.status).to.eq(200)
      cy.log(response.body)
    })
  })

})
