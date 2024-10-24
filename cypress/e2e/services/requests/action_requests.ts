export const getAction = (actionId: string, cookie: string) => {
  const qs = {
    key: Cypress.env('apiKey'),
    token: Cypress.env('token')
  }
  
  return cy.request({
    method: 'GET',
    url: `/1/actions/${actionId}`,
    qs,
    headers: {
      'Cookie': cookie
    }
  })
}