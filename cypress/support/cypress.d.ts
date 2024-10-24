declare namespace Cypress {
  interface Chainable<Subject> {
    insert(name: string, age: number, designation: string, salary: number): Chainable<void>
    selectByName(name: string): Chainable<any>
    selectAllsselectAllEmployees(): Chainable<any>
    updateExample(name: string, designation: string): Chainable<void>
    deleteExample(name: string): Chainable<void>
  }
}