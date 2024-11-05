const apiKey = Cypress.env('API_KEY')
const apiToken = Cypress.env('API_TOKEN')

const getBoardMemberships = (boardId: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/memberships`
  return cy.request({
    method: 'GET',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    headers: { 'Accept': 'application/json' },
    failOnStatusCode: false
  }).then(response => response)
}

const getBoardDetails = (boardId: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}`
  return cy.request({
    method: 'GET',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    headers: { 'Accept': 'application/json' },
    failOnStatusCode: false
  }).then(response => response)
}

const updateBoard = (boardId: string, body: object) => {
  const url = `https://api.trello.com/1/boards/${boardId}`
  return cy.request({
    method: 'PUT',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    body: body,
    failOnStatusCode: false
  }).then(response => response)
}

const deleteBoard = (boardId: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}`
  return cy.request({
    method: 'DELETE',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

const getBoardField = (boardId: string, field: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/${field}`
  return cy.request({
    method: 'GET',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

const getBoardActions = (boardId: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/actions`
  return cy.request({
    method: 'GET',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

const getCardDetails = (boardId: string, cardId: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/cards/${cardId}`
  return cy.request({
    method: 'GET',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

const getBoardStars = (boardId: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/boardStars`
  return cy.request({
    method: 'GET',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    headers: { 'Accept': 'application/json' },
    failOnStatusCode: false
  }).then(response => response)
}

const getBoardChecklists = (boardId: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/checklists`
  return cy.request({
    method: 'GET',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

const getBoardCards = (boardId: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/cards`
  return cy.request({
    method: 'GET',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

const getFilteredBoardCards = (boardId: string, filter: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/cards/${filter}`
  return cy.request({
    method: 'GET',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

const getBoardCustomFields = (boardId: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/customFields`
  return cy.request({
    method: 'GET',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    headers: { 'Accept': 'application/json' },
    failOnStatusCode: false
  }).then(response => response)
}

const getBoardLabels = (boardId: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/labels`
  return cy.request({
    method: 'GET',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

const createBoardLabel = (boardId: string, name: string, color: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/labels`
  return cy.request({
    method: 'POST',
    url: `${url}?name=${name}&color=${color}&key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

const getBoardLists = (boardId: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/lists`
  return cy.request({
    method: 'GET',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    headers: { 'Accept': 'application/json' },
    failOnStatusCode: false
  }).then(response => response)
}

const createBoardList = (boardId: string, name: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/lists`
  return cy.request({
    method: 'POST',
    url: `${url}?name=${name}&key=${apiKey}&token=${apiToken}`,
    headers: { 'Accept': 'application/json' },
    failOnStatusCode: false
  }).then(response => response)
}

const getFilteredBoardLists = (boardId: string, filter: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/lists/${filter}`
  return cy.request({
    method: 'GET',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

const getBoardMembers = (boardId: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/members`
  return cy.request({
    method: 'GET',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

const updateBoardMember = (boardId: string, email: string, fullName: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/members`
  return cy.request({
    method: 'PUT',
    url: `${url}?email=${email}&key=${apiKey}&token=${apiToken}`,
    headers: { 'Content-Type': 'application/json' },
    body: {
      fullName: fullName
    },
    failOnStatusCode: false
  }).then(response => response)
}

const updateBoardMemberType = (boardId: string, memberId: string, type: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/members/${memberId}`
  return cy.request({
    method: 'PUT',
    url: `${url}?type=${type}&key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

const deleteBoardMember = (boardId: string, memberId: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/members/${memberId}`
  return cy.request({
    method: 'DELETE',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

const updateMembershipType = (boardId: string, membershipId: string, type: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/memberships/${membershipId}`
  return cy.request({
    method: 'PUT',
    url: `${url}?type=${type}&key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

const updateEmailPosition = (boardId: string, value: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/myPrefs/emailPosition`
  return cy.request({
    method: 'PUT',
    url: `${url}?value=${value}&key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

const updateIdEmailList = (boardId: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/myPrefs/idEmailList`
  return cy.request({
    method: 'PUT',
    url: `${url}?value=5abbe4b7ddc1b351ef961414&key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

const updateShowSidebar = (boardId: string, value: boolean) => {
  const url = `https://api.trello.com/1/boards/${boardId}/myPrefs/showSidebar`
  return cy.request({
    method: 'PUT',
    url: `${url}?value=${value}&key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

const updateShowSidebarActivity = (boardId: string, value: boolean) => {
  const url = `https://api.trello.com/1/boards/${boardId}/myPrefs/showSidebarActivity`
  return cy.request({
    method: 'PUT',
    url: `${url}?value=${value}&key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

// PUT request to update showSidebarBoardActions preference
const updateShowSidebarBoardActions = (boardId: string, value: boolean) => {
  const url = `https://api.trello.com/1/boards/${boardId}/myPrefs/showSidebarBoardActions`
  return cy.request({
    method: 'PUT',
    url: `${url}?value=${value}&key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

// PUT request to update showSidebarMembers preference
const updateShowSidebarMembers = (boardId: string, value: boolean) => {
  const url = `https://api.trello.com/1/boards/${boardId}/myPrefs/showSidebarMembers`
  return cy.request({
    method: 'PUT',
    url: `${url}?value=${value}&key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

// POST request to create a new board
const createBoard = (name: string) => {
  const url = `https://api.trello.com/1/boards/`
  return cy.request({
    method: 'POST',
    url: `${url}?name=${name}&key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

// POST request to generate calendar key
const generateCalendarKey = (boardId: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/calendarKey/generate`
  return cy.request({
    method: 'POST',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

// POST request to generate email key
const generateEmailKey = (boardId: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/emailKey/generate`
  return cy.request({
    method: 'POST',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

// POST request to add a tag to a board
const addTagToBoard = (boardId: string, tagId: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/idTags`
  return cy.request({
    method: 'POST',
    url: `${url}?value=${tagId}&key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

// POST request to mark a board as viewed
const markBoardAsViewed = (boardId: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/markedAsViewed`
  return cy.request({
    method: 'POST',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    failOnStatusCode: false
  }).then(response => response)
}

// GET request to retrieve board plugins
const getBoardPlugins = (boardId: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/boardPlugins`
  return cy.request({
    method: 'GET',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    headers: { 'Accept': 'application/json' },
    failOnStatusCode: false
  }).then(response => response)
}

// GET request to retrieve plugins associated with a board
const getPlugins = (boardId: string) => {
  const url = `https://api.trello.com/1/boards/${boardId}/plugins`
  return cy.request({
    method: 'GET',
    url: `${url}?key=${apiKey}&token=${apiToken}`,
    headers: { 'Accept': 'application/json' },
    failOnStatusCode: false
  }).then(response => response)
}
