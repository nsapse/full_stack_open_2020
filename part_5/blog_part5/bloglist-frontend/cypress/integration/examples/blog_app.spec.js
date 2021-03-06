describe('Blog App', function() {
  beforeEach(function(){
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    cy.visit('http://localhost:3000')
  })
  it('Login Form is Shown', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Login')
  })
  describe('When a valid user exists in the database', function()  {
    beforeEach(function(){
      const user = {
        username: 'Test',
        name: 'Test',
        password: 'Test'
      }
      const user2 = {
        username: 'Test2',
        name: 'Test2',
        password: 'Test2'
      }
      cy.request('POST', 'http://localhost:3003/api/users', user)
      cy.request('POST', 'http://localhost:3003/api/users', user2)
      cy.visit('http://localhost:3000')
    })
    it('A user can login with proper credentials', function(){
      cy.get('#username').type('Test')
      cy.get('#password').type('Test')
      cy.contains('login').click()
      cy.contains('Logged in as Test')
    })
    it('A user is rejected with improper credentials', function(){
      cy.get('#username').type('Wrong')
      cy.get('#password').type('Wrong')
      cy.contains('login').click()
      cy.contains('Wrong username or password')
    })
    describe('When Logged in', () => {
      beforeEach(function(){
        cy.login({ username: 'Test', password:'Test' })
      })
      it('a new note can be created', function() {
        cy.contains('Add A New Blog').click()
        cy.get('#Title').type('Test Post')
        cy.get('#Author').type('Test Author')
        cy.get('#Url').type('http://test:url')
        cy.contains('Submit').click()
        cy.contains('Added Test Post by Test Author')
      })
      describe('and when a note exists', function() {
        beforeEach(function(){
          cy.post({ title: 'Test Title', author: 'Test Author', url:'Test Url' })
        })
        it('the note can be liked', function(){
          cy.contains('Expand').click()
          cy.contains('Likes: 0')
          cy.get('#likeButton').click()
          cy.contains('Likes: 1')
        })
        it('The user who posted it can delete it', function(){
          cy.contains('Expand').click()
          cy.get('#deleteButton').click()
          cy.get('html').should('not.contain', 'Test Title')
        })
        it('a user who did not make the note cannot delete it', function(){
          cy.contains('Logout').click()
          cy.login({ username: 'Test2', password:'Test2' })
          cy.contains('Expand').click()
          cy.get('.fullBlog').should('not.contain', '#deleteButton')
        })
      })
    })
  })
})
