// GET Notification by ID
cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/notifications/{id}?key=APIKey&token=APIToken',
    headers: {
        'Accept': 'application/json'
    }
})

// PUT Notification by ID
cy.request({
    method: 'PUT',
    url: 'https://api.trello.com/1/notifications/{id}?key=APIKey&token=APIToken',
    headers: {
        'Accept': 'application/json'
    }
})

// GET Notification Field by ID
cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/notifications/{id}/{field}?key=APIKey&token=APIToken',
    headers: {
        'Accept': 'application/json'
    }
})

// POST Read All Notifications
cy.request({
    method: 'POST',
    url: 'https://api.trello.com/1/notifications/all/read?key=APIKey&token=APIToken',
    headers: {
        'Accept': 'application/json'
    }
})

// PUT Mark Notification as Unread
cy.request({
    method: 'PUT',
    url: 'https://api.trello.com/1/notifications/{id}/unread?key=APIKey&token=APIToken',
    headers: {
        'Accept': 'application/json'
    }
})

// GET Board of Notification by ID
cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/notifications/{id}/board?key=APIKey&token=APIToken',
    headers: {
        'Accept': 'application/json'
    }
})

// GET Card of Notification by ID
cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/notifications/{id}/card?key=APIKey&token=APIToken',
    headers: {
        'Accept': 'application/json'
    }
})

// GET List of Notification by ID
cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/notifications/{id}/list?key=APIKey&token=APIToken',
    headers: {
        'Accept': 'application/json'
    }
})

// GET Member of Notification by ID
cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/notifications/{id}/member?key=APIKey&token=APIToken',
    headers: {
        'Accept': 'application/json'
    }
})

// GET Member Creator of Notification by ID
cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/notifications/{id}/memberCreator?key=APIKey&token=APIToken',
    headers: {
        'Accept': 'application/json'
    }
})

// GET Organization of Notification by ID
cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/notifications/{id}/organization?key=APIKey&token=APIToken',
    headers: {
        'Accept': 'application/json'
    }
})
