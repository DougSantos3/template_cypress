interface GetBoardsOptions {
  fields?: string
}

export const createBoard = (name: string) => {
  return cy.request({
    method: 'POST',
    url: '/1/boards/',
    qs: {
      name: name,
      key: Cypress.env('apiKey'),
      token: Cypress.env('token')
    }
  })
}

export const getBoards = (cookie: string, options: GetBoardsOptions = {}) => {
  const { fields } = options
  
  const qs = {
    ...(fields && { fields: encodeURIComponent(fields) }),
    key: Cypress.env('apiKey'),
    token: Cypress.env('token')
  }

  return cy.request({
    method: 'GET',
    url: '/1/members/me/boards',
    qs,
    headers: {
      'Cookie': cookie
    }
  })
}

export const getBoard = (boardId: string, cookie: string) => {
  const qs = {
    key: Cypress.env('apiKey'),
    token: Cypress.env('token')
  }

  return cy.request({
    method: 'GET',
    url: `/1/boards/${boardId}`,
    qs,
    headers: {
      'Cookie': cookie
    }
  })
}

export const updateBoardName = (boardId: string, cookie: string) => {
  const qs = {
    key: Cypress.env('apiKey'),
    token: Cypress.env('token')
  }

  return cy.request({
    method: 'PUT',
    url: `/1/boards/${boardId}`,
    qs,
    headers: {
      'Content-Type': 'application/json',
      'Cookie': cookie
    },
  })
}

export const deleteBoard = (boardId: string) => {
  return cy.request({
    method: 'DELETE',
    url: `/1/boards/${boardId}`,
    qs: {
      key: Cypress.env('apiKey'),
      token: Cypress.env('token')
    }
  })
}
