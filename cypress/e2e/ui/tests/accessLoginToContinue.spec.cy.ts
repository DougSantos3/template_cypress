import {  acceptAllCookie, buttonLoginIn } from '../pages/home'

describe('template spec', () => {
  it('Access page log in to continue', () => {
    cy.visit('https://trello.com')
    acceptAllCookie().click()
    buttonLoginIn().click()
  })
})