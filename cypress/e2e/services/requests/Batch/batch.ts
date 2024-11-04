const API_KEY = 'suaAPIKey'
const API_TOKEN = 'seuAPIToken'
const urls = 'urlsAEnviar'

describe('Trello API Batch Request', () => {
  it('should send a batch GET request', () => {
    cy.request({
      method: 'GET',
      url: `https://api.trello.com/1/batch?urls=${urls}&key=${API_KEY}&token=${API_TOKEN}`
    }).then((response) => {
      expect(response.status).to.eq(200)
      cy.log('Response:', response.body)
    })
  })
})
