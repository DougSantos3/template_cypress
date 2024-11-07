export function createCard(idList: string) {
    return cy.request({
        method: 'POST',
        url: `https://api.trello.com/1/cards?idList=${idList}&key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

export function getCard(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

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

export function deleteCard(id: string) {
    return cy.request({
        method: 'DELETE',
        url: `https://api.trello.com/1/cards/${id}?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
    })
}

export function getCardField(id: string, field: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/${field}?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

export function getCardActions(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/actions?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

export function getCardAttachments(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/attachments?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

export function addAttachmentToCard(id: string) {
    return cy.request({
        method: 'POST',
        url: `https://api.trello.com/1/cards/${id}/attachments?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

export function getAttachment(id: string, idAttachment: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/attachments/${idAttachment}?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

export function deleteAttachment(id: string, idAttachment: string) {
    return cy.request({
        method: 'DELETE',
        url: `https://api.trello.com/1/cards/${id}/attachments/${idAttachment}?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
    })
}

export function getBoardFromCard(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/board?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

export function getCheckItemStates(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/checkItemStates?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

export function getChecklistsFromCard(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/checklists?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

export function createChecklistForCard(id: string) {
    return cy.request({
        method: 'POST',
        url: `https://api.trello.com/1/cards/${id}/checklists?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

export function getCheckItem(id: string, idCheckItem: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/checkItem/${idCheckItem}?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

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

export function deleteCheckItem(id: string, idCheckItem: string) {
    return cy.request({
        method: 'DELETE',
        url: `https://api.trello.com/1/cards/${id}/checkItem/${idCheckItem}?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
    })
}

export function getListFromCard(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/list?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

export function getMembersFromCard(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/members?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

export function getMembersVoted(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/membersVoted?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

export function addMemberVoted(id: string, memberId: string) {
    return cy.request({
        method: 'POST',
        url: `https://api.trello.com/1/cards/${id}/membersVoted?value=${memberId}&key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

export function getPluginDataFromCard(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/pluginData?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

export function getStickersFromCard(id: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/stickers?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

export function addStickerToCard(id: string, image: string, top: number, left: number, zIndex: number) {
    return cy.request({
        method: 'POST',
        url: `https://api.trello.com/1/cards/${id}/stickers?image=${image}&top=${top}&left=${left}&zIndex=${zIndex}&key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

export function getStickerFromCard(id: string, idSticker: string) {
    return cy.request({
        method: 'GET',
        url: `https://api.trello.com/1/cards/${id}/stickers/${idSticker}?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

export function updateStickerFromCard(id: string, idSticker: string, top: number, left: number, zIndex: number) {
    return cy.request({
        method: 'PUT',
        url: `https://api.trello.com/1/cards/${id}/stickers/${idSticker}?top=${top}&left=${left}&zIndex=${zIndex}&key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
        headers: {
            Accept: 'application/json',
        },
    })
}

export function deleteStickerFromCard(id: string, idSticker: string) {
    return cy.request({
        method: 'DELETE',
        url: `https://api.trello.com/1/cards/${id}/stickers/${idSticker}?key=${Cypress.env('apiKey')}&token=${Cypress.env('apiToken')}`,
    })
}


cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/cards/{id}/actions/{idAction}/comments?text={text}&key=APIKey&token=APIToken`,
    headers: {
        'Accept': 'application/json',
    },
})

cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/cards/{id}/actions/{idAction}/comments?key=APIKey&token=APIToken`,
})

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

cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/cards/{id}/customFieldItems?key=APIKey&token=APIToken`,
    headers: {
        'Accept': 'application/json',
    },
})

cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/cards/{id}/actions/comments?text={text}&key=APIKey&token=APIToken`,
    headers: {
        'Accept': 'application/json',
    },
})

cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/cards/{id}/idLabels?key=APIKey&token=APIToken`,
})

cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/cards/{id}/idMembers?key=APIKey&token=APIToken`,
})

cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/cards/{id}/labels?color={color}&key=APIKey&token=APIToken`,
})

cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/cards/{id}/markAssociatedNotificationsRead?key=APIKey&token=APIToken`,
})

cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/cards/{id}/idLabels/{idLabel}?key=APIKey&token=APIToken`,
})

cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/cards/{id}/idMembers/{idMember}?key=APIKey&token=APIToken`,
})

cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/cards/{id}/membersVoted/{idMember}?key=APIKey&token=APIToken`,
})

cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}?key=APIKey&token=APIToken`,
    headers: {
        'Accept': 'application/json',
    },
})

cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/cards/{id}/checklists/{idChecklist}?key=APIKey&token=APIToken`,
})
