const enterpriseId = '{id}' // Substitua pelo ID da sua empresa
const memberId = '{idMember}' // Substitua pelo ID do membro
const organizationId = '{idOrganization}' // Substitua pelo ID da organização
const organizationsBulkId = '{idOrganizations}' // Substitua pelo ID das organizações para o request em bulk
const idMember = ''
const idOrg = ''
const idOrganization = ''

// 1. Dados da empresa
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/enterprises/${enterpriseId}?key=${apiKey}&token=${apiToken}`,
    headers: {
        'Accept': 'application/json'
    }
})

// 2. Log de auditoria da empresa
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/enterprises/${enterpriseId}/auditlog?key=${apiKey}&token=${apiToken}`,
    headers: {
        'Accept': 'application/json'
    }
})

// 3. Administradores da empresa
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/enterprises/${enterpriseId}/admins?key=${apiKey}&token=${apiToken}`,
    headers: {
        'Accept': 'application/json'
    }
})

// 4. URL de cadastro da empresa
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/enterprises/${enterpriseId}/signupUrl?key=${apiKey}&token=${apiToken}`,
    headers: {
        'Accept': 'application/json'
    }
})

// 5. Consulta de membros da empresa
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/enterprises/${enterpriseId}/members/query?key=${apiKey}&token=${apiToken}`,
    headers: {
        'Accept': 'application/json'
    }
})

// 6. Membros da empresa
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/enterprises/${enterpriseId}/members?key=${apiKey}&token=${apiToken}`,
    headers: {
        'Accept': 'application/json'
    }
})

// 7. Detalhes de um membro específico da empresa
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/enterprises/${enterpriseId}/members/${memberId}?key=${apiKey}&token=${apiToken}`,
    headers: {
        'Accept': 'application/json'
    }
})

// 8. Organização transferível da empresa
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/enterprises/${enterpriseId}/transferrable/organization/${organizationId}?key=${apiKey}&token=${apiToken}`,
    headers: {
        'Accept': 'application/json'
    }
})

// 9. Organizações transferíveis em lote
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/enterprises/${enterpriseId}/transferrable/bulk/${organizationsBulkId}?key=${apiKey}&token=${apiToken}`,
    headers: {
        'Accept': 'application/json'
    }
})

// 10. Bulk de pedidos de junção de empresa
cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/enterprises/${enterpriseId}/enterpriseJoinRequest/bulk?idOrganizations=${idOrganizations}&key=${apiKey}&token=${apiToken}`
})

// 11. Organizações que podem ser reivindicadas pela empresa
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/enterprises/${enterpriseId}/claimableOrganizations?key=${apiKey}&token=${apiToken}`,
    headers: {
        'Accept': 'application/json'
    }
})

// 12. Organizações pendentes de inclusão na empresa
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/enterprises/${enterpriseId}/pendingOrganizations?key=${apiKey}&token=${apiToken}`,
    headers: {
        'Accept': 'application/json'
    }
})

// 13. Criar tokens para a empresa
cy.request({
    method: 'POST',
    url: `https://api.trello.com/1/enterprises/${enterpriseId}/tokens?key=${apiKey}&token=${apiToken}`
})

// 14. Associar uma organização à empresa
cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/enterprises/${enterpriseId}/organizations?idOrganization=${idOrganization}&key=${apiKey}&token=${apiToken}`,
    headers: {
        'Accept': 'application/json'
    }
})

// 15. Licenciar um membro da empresa
cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/enterprises/${enterpriseId}/members/${idMember}/licensed?value=${value}&key=${apiKey}&token=${apiToken}`,
    headers: {
        'Accept': 'application/json'
    }
})

// 16. Ativar/desativar um membro da empresa
cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/enterprises/${enterpriseId}/members/${idMember}/deactivated?value=${value}&key=${apiKey}&token=${apiToken}`
})

// 17. Adicionar um membro como administrador da empresa
cy.request({
    method: 'PUT',
    url: `https://api.trello.com/1/enterprises/${enterpriseId}/admins/${idMember}?key=${apiKey}&token=${apiToken}`
})

// 18. Remover um membro da lista de administradores da empresa
cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/enterprises/${enterpriseId}/admins/${idMember}?key=${apiKey}&token=${apiToken}`
})

// 19. Remover uma organização da empresa
cy.request({
    method: 'DELETE',
    url: `https://api.trello.com/1/enterprises/${enterpriseId}/organizations/${idOrg}?key=${apiKey}&token=${apiToken}`
})

// 20. Consultar organizações em bulk
cy.request({
    method: 'GET',
    url: `https://api.trello.com/1/enterprises/${enterpriseId}/organizations/bulk/${idOrganizations}?key=${apiKey}&token=${apiToken}`
})
