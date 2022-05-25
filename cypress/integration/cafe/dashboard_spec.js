// const reservations = require('../../fixtures/reservations')
describe("Dashboard Tests", () => {

  beforeEach(() => {
    // cy.intercept('http://localhost:3001/api/v1/reservations',reservations)
    cy.visit('http://localhost:3000/');
  })

  it('Should have a Title', () => {
    cy.get('.app-title').contains('Turing Cafe Reservations')
    })


  it('Should have a form', () => {
    cy.get('.resy-form').should('exist')
    })


  it('Should have at least one box', () => {
    cy.get('.card').should('exist')
    })

    it('Box should contain data', () => {
      cy.get('.card').should('exist')
      .first()
      .contains("Christie")

      cy.get('.card')
      .first()
      .contains("12/29")

      cy.get('.card')
      .first()
      .contains("7:00")

      cy.get('.card')
      .first()
      .contains("12")
      })

    it('should be able to enter data in name',() => {
      cy.get('input').eq(0).type('Peter').should('have.value','Peter')
    })

    it('should be able to enter data in date',() => {
      cy.get('input').eq(1).type('2022-05-19').should('have.value','2022-05-19')
    })

    it('should be able to enter data in time',() => {
      cy.get('input').eq(2).type('16:00').should('have.value','16:00')
    })

    it('should be able to enter data in number',() => {
      cy.get('input').eq(3).type(5).should('have.value','5')
    })

    it('Should be able to make a reservation', () => {
      cy.get('input').eq(0).type('Jason')
      cy.get('input').eq(1).type('2022-05-23')
      cy.get('input').eq(2).type('13:00')
      cy.get('input').eq(3).type(4)

      cy.get('button').first().click()

      cy.get('.card')
      .first()
      .contains('Jason')

      cy.get('.card')
      .first()
      .contains("2022-05-23")

      cy.get('.card')
      .first()
      .contains("13:00")

      cy.get('.card')
      .first()
      .contains("5")

    })
})
