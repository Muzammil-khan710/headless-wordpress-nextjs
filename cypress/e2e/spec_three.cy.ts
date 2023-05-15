describe('When you visit home', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('should navigate to single blog page', () => {
        cy.get('a[href*="blog/test-post"]').contains('Test post').click()
    })
})