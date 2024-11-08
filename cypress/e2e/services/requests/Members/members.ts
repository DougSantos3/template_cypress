// Requisição GET para obter informações de um membro do Trello
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
}).then((response) => {
    // Aqui você pode manipular a resposta, se necessário
    // Exemplo: console.log(response.body)
})

// Requisição PUT para atualizar informações de um membro do Trello
cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/members/{id}?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    },
    body: {
        // Substitua este objeto pelo corpo da requisição PUT necessário
        // Exemplo: name: 'Novo Nome'
    }
}).then((response) => {
    // Aqui você pode manipular a resposta, se necessário
    // Exemplo: console.log(response.status)
})

// GET request para obter um campo específico de um membro
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/{field}?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// GET request para obter ações de um membro
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/actions?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// GET request para obter fundos de quadro de um membro
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/boardBackgrounds?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// POST request para criar um fundo de quadro com um arquivo
cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/members/{id}/boardBackgrounds?file={file}&key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// GET request para obter um fundo de quadro específico de um membro
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/boardBackgrounds/{idBackground}?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// PUT request para atualizar um fundo de quadro específico de um membro
cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/members/{id}/boardBackgrounds/{idBackground}?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// DELETE request para excluir um fundo de quadro específico de um membro
cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/members/{id}/boardBackgrounds/{idBackground}?key=APIKey&token=APIToken`
})

// GET request para obter os "board stars" de um membro
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/boardStars?key=APIKey&token=APIToken`
})

// POST request para criar um "board star" para um quadro específico
cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/members/{id}/boardStars?idBoard=5abbe4b7ddc1b351ef961414&pos={pos}&key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// GET request para obter um "board star" específico de um membro
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/boardStars/{idStar}?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// PUT request para atualizar um "board star" específico de um membro
cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/members/{id}/boardStars/{idStar}?key=APIKey&token=APIToken`
})

// DELETE request para excluir um "board star" específico de um membro
cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/members/{id}/boardStars/{idStar}?key=APIKey&token=APIToken`
})

// GET request para obter todos os quadros de um membro
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/boards?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// GET request para obter convites de quadros de um membro
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/boardsInvited?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// GET request para obter todos os cartões de um membro
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/cards?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// GET request para obter os fundos de quadro personalizados de um membro
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/customBoardBackgrounds?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// POST request para criar um fundo de quadro personalizado com um arquivo
cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/members/{id}/customBoardBackgrounds?file={file}&key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// GET request para obter um fundo de quadro personalizado específico
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/customBoardBackgrounds/{idBackground}?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// PUT request para atualizar um fundo de quadro personalizado específico
cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/members/{id}/customBoardBackgrounds/{idBackground}?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// DELETE request para remover um fundo de quadro personalizado específico
cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/members/{id}/customBoardBackgrounds/{idBackground}?key=APIKey&token=APIToken`
})

// GET request para obter os emojis personalizados de um membro
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/customEmoji?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// POST request para criar um emoji personalizado com arquivo e nome
cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/members/{id}/customEmoji?file={file}&name={name}&key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// GET request para obter um emoji personalizado específico
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/customEmoji/{idEmoji}?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// GET request para obter os adesivos personalizados de um membro
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/customStickers?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// POST request para criar um adesivo personalizado com um arquivo
cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/members/{id}/customStickers?file={file}&key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// GET request para obter um adesivo personalizado específico
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/customStickers/{idSticker}?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// DELETE request para remover um adesivo personalizado específico
cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/members/{id}/customStickers/{idSticker}?key=APIKey&token=APIToken`
})

// GET request para obter as notificações de um membro
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/notifications?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// GET request para obter as organizações de um membro
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/organizations?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// GET request para obter as organizações para as quais um membro foi convidado
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/organizationsInvited?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// GET request para obter as buscas salvas de um membro
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/savedSearches?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// POST request para criar uma nova busca salva com nome, consulta e posição
cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/members/{id}/savedSearches?name={name}&query={query}&pos={pos}&key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// GET request para obter uma busca salva específica de um membro
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/savedSearches/{idSearch}?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// PUT request para atualizar uma busca salva específica de um membro
cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/members/{id}/savedSearches/{idSearch}?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// DELETE request para remover uma busca salva específica de um membro
cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/members/{id}/savedSearches/{idSearch}?key=APIKey&token=APIToken`
})

// GET request para obter os tokens de um membro
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/tokens?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// POST request para fazer upload de um avatar para um membro
cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/members/{id}/avatar?file={file}&key=APIKey&token=APIToken`
})

// POST request para descartar mensagens de "one time" para um membro
cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/members/{id}/oneTimeMessagesDismissed?value=5abbe4b7ddc1b351ef961414&key=APIKey&token=APIToken`
})

// GET request para obter as configurações de canal de notificações de um membro
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/notificationsChannelSettings?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// PUT request para atualizar as configurações de canal de notificações para "email" de um membro
cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/members/{id}/notificationsChannelSettings?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: {
        channel: "email",
        blockedKeys: "notification_comment_card"
    }
})

// GET request para obter as configurações de um canal específico de notificações de um membro
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/members/{id}/notificationsChannelSettings/{channel}?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

// PUT request para atualizar as configurações de um canal específico de notificações de um membro
cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/members/{id}/notificationsChannelSettings/{channel}?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    body: {
        blockedKeys: "notification_comment_card"
    }
})

// PUT request para atualizar as chaves bloqueadas de um canal específico de notificações de um membro
cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/members/{id}/notificationsChannelSettings/{channel}/{blockedKeys}?key=APIKey&token=APIToken`,
    headers: {
        Accept: 'application/json'
    }
})

