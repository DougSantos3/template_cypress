// Função para criar um novo card no Trello
export function createCard(idList: string) {
    return cy.request({
        method: 'POST',
        url: `https://api.trello.com/1/cards?idList=${idList}&key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para obter detalhes de um card específico
export function getCard(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para atualizar um card específico
export function updateCard(id: string, data: object) {
    return cy.request({
        method: 'PUT',
        url: `https://api.trello.com/1/cards/${id}?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
        body: data,
    })
}

// Função para deletar um card específico
export function deleteCard(id: string) {
    return cy.request({
        method: 'DELETE',
        url: `https://api.trello.com/1/cards/${id}?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
    })
}

// Função para obter um campo específico de um card
export function getCardField(id: string, field: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/${field}?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para obter as ações de um card
export function getCardActions(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/actions?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para obter os anexos de um card
export function getCardAttachments(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/attachments?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para adicionar um anexo a um card
export function addAttachmentToCard(id: string) {
    return cy.request({
        method: 'POST',
        url: `https://api.trello.com/1/cards/${id}/attachments?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para obter um anexo de um card
export function getAttachment(id: string, idAttachment: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/attachments/${idAttachment}?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para deletar um anexo de um card
export function deleteAttachment(id: string, idAttachment: string) {
    return cy.request({
        method: 'DELETE',
        url: `https://api.trello.com/1/cards/${id}/attachments/${idAttachment}?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
    })
}

// Função para obter o quadro de um card
export function getBoardFromCard(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/board?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para obter os estados de itens de checklists de um card
export function getCheckItemStates(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/checkItemStates?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para obter as listas de checklists de um card
export function getChecklistsFromCard(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/checklists?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para criar uma checklist em um card
export function createChecklistForCard(id: string) {
    return cy.request({
        method: 'POST',
        url: `https://api.trello.com/1/cards/${id}/checklists?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para obter um item específico de uma checklist
export function getCheckItem(id: string, idCheckItem: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/checkItem/${idCheckItem}?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para atualizar um item de checklist
export function updateCheckItem(id: string, idCheckItem: string, data: object) {
    return cy.request({
        method: 'PUT',
        url: `https://api.trello.com/1/cards/${id}/checkItem/${idCheckItem}?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
        body: data,
    })
}

// Função para deletar um item de checklist
export function deleteCheckItem(id: string, idCheckItem: string) {
    return cy.request({
        method: 'DELETE',
        url: `https://api.trello.com/1/cards/${id}/checkItem/${idCheckItem}?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
    })
}

// Função para obter a lista de um card
export function getListFromCard(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/list?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para obter os membros de um card
export function getMembersFromCard(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/members?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para obter os membros que votaram em um card
export function getMembersVoted(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/membersVoted?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para adicionar um membro que votou em um card
export function addMemberVoted(id: string, memberId: string) {
    return cy.request({
        method: 'POST',
        url: `https://api.trello.com/1/cards/${id}/membersVoted?value=${memberId}&key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para obter dados do plugin de um card
export function getPluginDataFromCard(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/pluginData?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para obter os stickers de um card
export function getStickersFromCard(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/stickers?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para adicionar um sticker a um card
export function addStickerToCard(id: string, image: string, top: number, left: number, zIndex: number) {
    return cy.request({
        method: 'POST',
        url: `https://api.trello.com/1/cards/${id}/stickers?image=${image}&top=${top}&left=${left}&zIndex=${zIndex}&key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para obter um sticker de um card
export function getStickerFromCard(id: string, idSticker: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/stickers/${idSticker}?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para atualizar um sticker de um card
export function updateStickerFromCard(id: string, idSticker: string, top: number, left: number, zIndex: number) {
    return cy.request({
        method: 'PUT',
        url: `https://api.trello.com/1/cards/${id}/stickers/${idSticker}?top=${top}&left=${left}&zIndex=${zIndex}&key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

// Função para deletar um sticker de um card
export function deleteStickerFromCard(id: string, idSticker: string) {
    return cy.request({
        method: 'DELETE',
        url: `https://api.trello.com/1/cards/${id}/stickers/${idSticker}?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
    })
}


// PUT: Add a comment to an action
cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/cards/{id}/actions/{idAction}/comments?text={text}&key=APIKey&token=APIToken`,
    headers: {
        'Accept': 'application/json',
    },
})

// DELETE: Delete a comment from an action
cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/cards/{id}/actions/{idAction}/comments?key=APIKey&token=APIToken`,
})

// PUT: Update a custom field item for a card
cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/cards/{idCard}/customField/{idCustomField}/item?key=APIKey&token=APIToken`,
    headers: {
        'Content-Type': 'application/json',
    },
    body: {
        value: {
            text: "<string>",
            checked: true,
            date: "2018-03-13T16:00:00.000Z",
            number: 2154,
        },
    },
})

// PUT: Update multiple custom fields for a card
cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/cards/{idCard}/customFields?key=APIKey&token=APIToken`,
    headers: {
        'Content-Type': 'application/json',
    },
    body: {
        customFieldItems: [
            {
                idCustomField: '5abbe4b7ddc1b351ef961414',
                value: {
                    text: "<string>",
                    checked: true,
                    date: "2018-03-13T16:00:00.000Z",
                    number: 2154,
                },
                idValue: "5abbe4b7ddc1b351ef961414",
            },
        ],
    },
})

// GET: Get custom field items for a card
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/cards/{id}/customFieldItems?key=APIKey&token=APIToken`,
    headers: {
        'Accept': 'application/json',
    },
})

// POST: Add a comment to a card action
cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/cards/{id}/actions/comments?text={text}&key=APIKey&token=APIToken`,
    headers: {
        'Accept': 'application/json',
    },
})

// POST: Add a label to a card
cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/cards/{id}/idLabels?key=APIKey&token=APIToken`,
})

// POST: Add a member to a card
cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/cards/{id}/idMembers?key=APIKey&token=APIToken`,
})

// POST: Add a label with color to a card
cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/cards/{id}/labels?color={color}&key=APIKey&token=APIToken`,
})

// POST: Mark associated notifications as read
cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/cards/{id}/markAssociatedNotificationsRead?key=APIKey&token=APIToken`,
})

// DELETE: Remove a label from a card
cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/cards/{id}/idLabels/{idLabel}?key=APIKey&token=APIToken`,
})

// DELETE: Remove a member from a card
cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/cards/{id}/idMembers/{idMember}?key=APIKey&token=APIToken`,
})

// DELETE: Remove a member's vote from a card
cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/cards/{id}/membersVoted/{idMember}?key=APIKey&token=APIToken`,
})

// PUT: Mark a checklist item as checked
cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}?key=APIKey&token=APIToken`,
    headers: {
        'Accept': 'application/json',
    },
})

// DELETE: Delete a checklist from a card
cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/cards/{id}/checklists/{idChecklist}?key=APIKey&token=APIToken`,
})
