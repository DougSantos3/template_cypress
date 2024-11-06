// POST: Create a custom field
cy.request({
    method: 'POST',
    url: 'https://api.trello.com/1/customFields?key=APIKey&token=APIToken',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: {
        "idModel": "5abbe4b7ddc1b351ef961414",
        "modelType": "board",
        "name": "<string>",
        "type": "checkbox",
        "options": "<string>",
        "pos": "top",
        "display_cardFront": true
    }
})

// GET: Retrieve a custom field by ID
cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/customFields/{id}?key=APIKey&token=APIToken',
    headers: {
        'Accept': 'application/json',
    }
})

// PUT: Update a custom field by ID
cy.request({
    method: 'PUT',
    url: 'https://api.trello.com/1/customFields/{id}?key=APIKey&token=APIToken',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: {
        "name": "<string>",
        "pos": "top",
        "display/cardFront": true
    }
})

// DELETE: Delete a custom field by ID
cy.request({
    method: 'DELETE',
    url: 'https://api.trello.com/1/customFields/{id}?key=APIKey&token=APIToken'
})

// GET: Retrieve options of a custom field
cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/customFields/{id}/options?key=APIKey&token=APIToken'
})

// POST: Add an option to a custom field
cy.request({
    method: 'POST',
    url: 'https://api.trello.com/1/customFields/{id}/options?key=APIKey&token=APIToken'
})

// GET: Retrieve a specific option of a custom field
cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/customFields/{id}/options/{idCustomFieldOption}?key=APIKey&token=APIToken'
})

// DELETE: Delete a specific option from a custom field
cy.request({
    method: 'DELETE',
    url: 'https://api.trello.com/1/customFields/{id}/options/{idCustomFieldOption}?key=APIKey&token=APIToken'
})
