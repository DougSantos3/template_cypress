export const cookieAccept = () => cy.get('//span[contains(text(), "Continuar")]')

/*Não recomendo o xpath com caminho completo, se tivesse acesso ao codigo do 
front, colocaria um id ou atributo unico */
export const createNewBoard = () => cy.get('//*[@id="content"]/div/div[2]/div/div/div/div/div/div/div/div[2]/div[1]/div[2]/ul/li[3]/div/p/span')
