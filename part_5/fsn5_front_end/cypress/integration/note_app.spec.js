describe('Note App', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      name: 'Matti Luukkainen',
      username: 'mluukkai',
      password: 'salainen'
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user)
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function () {
    cy.contains('Notes')
  })
  it('login form can be opened', function () {
    cy.contains('Log In').click()
  })
  it('a user can login', function () {
    cy.contains('Log In').click()
    cy.get('#username').type('mluukkai')
    cy.get('#password').type('salainen')
    cy.get('#login-button').click()

    cy.contains('Matti Luukkainen logged in')
  })

  it('login fails with the wrong password', function () {
    cy.contains('Log In').click()
    cy.get('#username').type('mluukkai')
    cy.get('#password').type('wrong')
    cy.get('#login-button').click()

    cy.get('.error').should('contain', 'Wrong Credentials')
  })

  describe('When logged in', function () {
    beforeEach(function () {
      cy.login({ username: 'mluukkai', password: 'salainen' })

      cy.createNote({
        content: 'a new note cypress',
        important: false
      })
    })
    it('a new note can be created', function () {
      cy.contains('New Post').click()
      cy.get('#note_input').type('another note cypress')
      cy.contains('Save').click()
      cy.contains('another note cypress')
    })
    it('it can be made important', function () {
      cy.contains('a new note cypress')
        .contains('make important').click()

      cy.contains('a new note cypress')
        .contains('make not important')
    })
    describe('and several notes exist', function() {
      beforeEach(function() {
        cy.createNote({ content: 'first note' , important: false })
        cy.createNote({ content: 'second note' , important: false })
        cy.createNote({ content: 'third note' , important: false })
      })
      it('a single note out of many can be marked as important', function() {
        cy.contains('second note')
          .contains('make important')
          .click()

        cy.contains('second note')
          .contains('make not important')
      })
    })

  })
})