// cypress/support/trelloApi.ts

const apiKey = Cypress.env('API_KEY')
const apiToken = Cypress.env('API_TOKEN')

const baseUrl = 'https://api.trello.com/1/actions'

export const getAction = (id: string) => {
  return cy.request({
    method: 'GET',
    url: `${baseUrl}/${id}?key=${apiKey}&token=${apiToken}`,
    headers: { 'Accept': 'application/json' },
    failOnStatusCode: false
  })
}

export const putActionText = (id: string, text: string) => {
  return cy.request({
    method: 'PUT',
    url: `${baseUrl}/${id}?text=${text}&key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  })
}

export const deleteAction = (id: string) => {
  return cy.request({
    method: 'DELETE',
    url: `${baseUrl}/${id}?key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  })
}

export const getActionField = (id: string, field: string) => {
  return cy.request({
    method: 'GET',
    url: `${baseUrl}/${id}/${field}?key=${apiKey}&token=${apiToken}`,
    headers: { 'Accept': 'application/json' },
    failOnStatusCode: false
  })
}

export const getActionBoard = (id: string) => {
  return cy.request({
    method: 'GET',
    url: `${baseUrl}/${id}/board?key=${apiKey}&token=${apiToken}`,
    headers: { 'Accept': 'application/json' },
    failOnStatusCode: false
  })
}

export const getActionCard = (id: string) => {
  return cy.request({
    method: 'GET',
    url: `${baseUrl}/${id}/card?key=${apiKey}&token=${apiToken}`,
    headers: { 'Accept': 'application/json' },
    failOnStatusCode: false
  })
}

export const getActionList = (id: string) => {
  return cy.request({
    method: 'GET',
    url: `${baseUrl}/${id}/list?key=${apiKey}&token=${apiToken}`,
    headers: { 'Accept': 'application/json' },
    failOnStatusCode: false
  })
}

export const getActionMember = (id: string) => {
  return cy.request({
    method: 'GET',
    url: `${baseUrl}/${id}/member?key=${apiKey}&token=${apiToken}`,
    headers: { 'Accept': 'application/json' },
    failOnStatusCode: false
  })
}

export const getActionMemberCreator = (id: string) => {
  return cy.request({
    method: 'GET',
    url: `${baseUrl}/${id}/memberCreator?key=${apiKey}&token=${apiToken}`,
    headers: { 'Accept': 'application/json' },
    failOnStatusCode: false
  })
}

export const getActionOrganization = (id: string) => {
  return cy.request({
    method: 'GET',
    url: `${baseUrl}/${id}/organization?key=${apiKey}&token=${apiToken}`,
    headers: { 'Accept': 'application/json' },
    failOnStatusCode: false
  })
}

export const putActionValue = (id: string, value: string) => {
  return cy.request({
    method: 'PUT',
    url: `${baseUrl}/${id}/text?value=${value}&key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  })
}

export const getActionReactions = (idAction: string) => {
  return cy.request({
    method: 'GET',
    url: `${baseUrl}/${idAction}/reactions?key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  })
}

export const postActionReaction = (idAction: string, reactionData: object) => {
  return cy.request({
    method: 'POST',
    url: `${baseUrl}/${idAction}/reactions?key=${apiKey}&token=${apiToken}`,
    headers: { 'Content-Type': 'application/json' },
    body: reactionData,
    failOnStatusCode: false
  })
}

export const getActionReactionById = (idAction: string, id: string) => {
  return cy.request({
    method: 'GET',
    url: `${baseUrl}/${idAction}/reactions/${id}?key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  })
}

export const deleteActionReaction = (idAction: string, id: string) => {
  return cy.request({
    method: 'DELETE',
    url: `${baseUrl}/${idAction}/reactions/${id}?key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  })
}

export const getActionReactionsSummary = (idAction: string) => {
  return cy.request({
    method: 'GET',
    url: `${baseUrl}/${idAction}/reactionsSummary?key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  })
}
