// POST: Create a checklist for a card
cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/checklists?idCard=5abbe4b7ddc1b351ef961414&key=APIKey&token=APIToken`,
})

// GET: Retrieve a checklist by ID
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/checklists/{id}?key=APIKey&token=APIToken`,
})

// PUT: Update a checklist by ID
cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/checklists/{id}?key=APIKey&token=APIToken`,
})

// DELETE: Delete a checklist by ID
cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/checklists/{id}?key=APIKey&token=APIToken`,
})

// GET: Retrieve a specific field of a checklist
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/checklists/{id}/{field}?key=APIKey&token=APIToken`,
})

// PUT: Update a specific field of a checklist
cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/checklists/{id}/{field}?value={value}&key=APIKey&token=APIToken`,
})

// GET: Retrieve the board associated with a checklist
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/checklists/{id}/board?key=APIKey&token=APIToken`,
})

// GET: Retrieve the cards associated with a checklist
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/checklists/{id}/cards?key=APIKey&token=APIToken`,
})

// GET: Retrieve the check items associated with a checklist
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/checklists/{id}/checkItems?key=APIKey&token=APIToken`,
})

// POST: Create a check item in a checklist
cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/checklists/{id}/checkItems?name={name}&key=APIKey&token=APIToken`,
})

// GET: Retrieve a specific check item by ID
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/checklists/{id}/checkItems/{idCheckItem}?key=APIKey&token=APIToken`,
})

// DELETE: Delete a specific check item by ID
cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/checklists/{id}/checkItems/{idCheckItem}?key=APIKey&token=APIToken`,
})
