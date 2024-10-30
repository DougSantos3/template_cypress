const apiKey = Cypress.env('API_KEY')
const apiToken = Cypress.env('API_TOKEN')

const getCompliance = (appKey: string) => {
  const url = `https://api.trello.com/1/applications/${appKey}/compliance`

  return cy.request({
    method: 'GET',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    headers: { 'Accept': 'application/json' },
    failOnStatusCode: false
  }).then(response => {
    return response 
  })
}
