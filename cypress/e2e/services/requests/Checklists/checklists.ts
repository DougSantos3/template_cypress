cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/checklists?idCard=5abbe4b7ddc1b351ef961414&key=APIKey&token=APIToken`,
})

cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/checklists/{id}?key=APIKey&token=APIToken`,
})

cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/checklists/{id}?key=APIKey&token=APIToken`,
})

cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/checklists/{id}?key=APIKey&token=APIToken`,
})

cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/checklists/{id}/{field}?key=APIKey&token=APIToken`,
})

cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/checklists/{id}/{field}?value={value}&key=APIKey&token=APIToken`,
})

cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/checklists/{id}/board?key=APIKey&token=APIToken`,
})

cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/checklists/{id}/cards?key=APIKey&token=APIToken`,
})

cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/checklists/{id}/checkItems?key=APIKey&token=APIToken`,
})

cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/checklists/{id}/checkItems?name={name}&key=APIKey&token=APIToken`,
})

cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/checklists/{id}/checkItems/{idCheckItem}?key=APIKey&token=APIToken`,
})

cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/checklists/{id}/checkItems/{idCheckItem}?key=APIKey&token=APIToken`,
})
