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

cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/customFields/{id}?key=APIKey&token=APIToken',
    headers: {
        'Accept': 'application/json',
    }
})

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

cy.request({
    method: 'DELETE',
    url: 'https://api.trello.com/1/customFields/{id}?key=APIKey&token=APIToken'
})

cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/customFields/{id}/options?key=APIKey&token=APIToken'
})

cy.request({
    method: 'POST',
    url: 'https://api.trello.com/1/customFields/{id}/options?key=APIKey&token=APIToken'
})

cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/customFields/{id}/options/{idCustomFieldOption}?key=APIKey&token=APIToken'
})

cy.request({
    method: 'DELETE',
    url: 'https://api.trello.com/1/customFields/{id}/options/{idCustomFieldOption}?key=APIKey&token=APIToken'
})
