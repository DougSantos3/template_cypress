export const createCard = (listId: string, name: string) => {
  return cy.request({
    method: 'POST',
    url: '/1/cards',
    qs: {
      idList: listId,
      name: name,
      key: Cypress.env('apiKey'),
      token: Cypress.env('token')
    }
  })
}

export const getCard = (cardId: string) => {
  return cy.request({
    method: 'GET',
    url: `/1/cards/${cardId}`,
    qs: {
      key: Cypress.env('apiKey'),
      token: Cypress.env('token')
    }
  })
}

export const updateCustomFields = (cardId: string) => {
  return cy.fixture('updateCustomFields').then((customFieldData) => {
    return cy.request({
      method: 'PUT',
      url: `/1/cards/${cardId}/customFields`,
      qs: {
        key: Cypress.env('apiKey'),
        token: Cypress.env('token')
      },
      headers: {
        'Content-Type': 'application/json'
      },
      body: customFieldData
    })
  })
}

export const deleteCard = (cardId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `/1/cards/${cardId}`,
    qs: {
      key: Cypress.env('apiKey'),
      token: Cypress.env('token')
    }
  })
}
