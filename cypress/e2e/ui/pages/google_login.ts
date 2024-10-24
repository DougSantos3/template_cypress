export const account = () =>  cy.get('div[data-email*="@gmail.com"]')
export const buttonContinue = () =>  cy.get('//span[contains(text(), "Continuar")]')
