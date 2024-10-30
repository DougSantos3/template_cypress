export const createList = (boardId: string, name: string) => {
  return cy.request({
    method: 'POST',
    url: `/1/boards/${boardId}/lists`,
    qs: {
      name: name,
      key: Cypress.env('apiKey'),
      token: Cypress.env('token')
    }
  })
}

export const getListId = (boardId: string, listName: string) => {
  return cy.request({
    method: 'GET',
    url: `/1/boards/${boardId}/lists`,
    qs: {
      key: Cypress.env('apiKey'),
      token: Cypress.env('token')
    }
  }).then(response => {
    const list = response.body.find((list: any) => list.name === listName)
    if (list) {
      return list.id
    } else {
      throw new Error(`Lista com nome "${listName}" não encontrada.`)
    }
  })
}