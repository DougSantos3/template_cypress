import { boardsSchema } from '../contracts/boardSchema'
import { getBoards, updateBoardName } from '../requests/board_requests'

const fields = { fields: "name" }
const boardId = Cypress.env('boardId')
const cookie = Cypress.env('cookie')

describe('Validate board', () => {
  it('Deve validar o contrato de uma board', { retries: 1 }, () => {
    getBoards(cookie, fields).then(response => {
      expect(response.status).to.eq(200)

      const { error, value } = boardsSchema.validate(response.body, { abortEarly: false });

      if (error) {
        cy.log('Validation Error:', JSON.stringify(error));
      } else {
        cy.log('Validation Passed:', JSON.stringify(value));
      }

      expect(error).to.be.not.null
    })
  })

  it('should update a Trello board', () => {
    updateBoardName(boardId, cookie).then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body).to.have.property('closed', false)
      expect(response.body).to.have.property('desc', '')
    })
  })
})
