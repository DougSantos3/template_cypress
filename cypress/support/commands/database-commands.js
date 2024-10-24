Cypress.Commands.add('insert', (name, age, designation, salary) => {
  cy.runSQL(`INSERT INTO example_table(name, age, designation, salary) VALUES ('${name}', ${age}, '${designation}', ${salary});`)
})

Cypress.Commands.add('selectByName', (name) => {
  cy.runSQL(`SELECT * FROM example_table WHERE name='${name}';`)
})

Cypress.Commands.add('selectAlls', () => {
  cy.runSQL('SELECT * FROM example_table;')
})

Cypress.Commands.add('updateExample', (name, designation) => {
  cy.runSQL(`UPDATE example_table SET designation = '${designation}' WHERE name='${name}';`)
})

Cypress.Commands.add('deleteExample', (id) => {
  cy.runSQL(`DELETE FROM example_table WHERE id='${id}';`)
    .then(() => {
      cy.log('Table row deleted')
    })
})

