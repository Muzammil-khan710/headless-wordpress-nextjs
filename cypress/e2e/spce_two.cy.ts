describe('Nav Menus', () => {
    context('1280px res', () => {
        beforeEach(() => {
            cy.viewport(1280, 720)
            cy.visit('/')

        })

        describe('When you visit home', () => {
            it('should navigate to home page', () => {
                cy.visit('/')
            })

            describe('Navigation', () => {
                it('should navigate to about page', () => {
                    cy.get('a[href*="contact"]').contains('contact').click()
                })
            })
        })
        

    })  
})

