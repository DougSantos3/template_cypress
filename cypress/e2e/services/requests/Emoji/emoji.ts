// Realizando a requisição GET diretamente
cy.request({
    method: 'GET',
    url: 'https://api.trello.com/1/emoji',
    headers: {
        'Accept': 'application/json'
    }
})
