describe('Register', () => {
    it('should register a new user', () => {
        cy.visit('/register')
        cy.get('input[name="email"]').type('test@test.com')
        cy.get('input[name="password"]').type('testing123')
        cy.get('button[type="submit"]').click()
    })
})