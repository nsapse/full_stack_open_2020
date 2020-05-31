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
        username: "Test", 
        name: "Test",
        password: "Test"
      }
      cy.request('POST', 'http://localhost:3003/api/users', user)
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
  })
  
})
