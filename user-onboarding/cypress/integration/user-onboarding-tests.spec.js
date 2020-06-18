describe('Tests inputs', () =>{
    it('can navigate to site', () =>{
        cy.visit('http://localhost:3000/')
    })
    it('can ADD a first name', () =>{
        cy.get('input[name=first_name]')
            .type('Khalil')
            .should('have.value', 'Khalil')
    })

    it('submit button should be DISABLED', () =>{
        cy.get('button').should('be.disabled')
    })

    it('can ADD a last name', () =>{
        cy.get('input[name=last_name]')
            .type('Foulks')
            .should('have.value', 'Foulks')
    })

    it('submit button should be DISABLED', () =>{
        cy.get('button').should('be.disabled')
    })

    it('can ADD a email', () =>{
        cy.get('input[name=email]')
            .type('khalil@gmail.com')
            .should('have.value', 'khalil@gmail.com')
    })

    it('submit button should be DISABLED', () =>{
        cy.get('button').should('be.disabled')
    })

    it('can ADD a password', () =>{
        cy.get('input[name=password]')
            .type('testing12345')
            .should('have.value', 'testing12345')
    })

    it('submit button should be DISABLED', () =>{
        cy.get('button').should('be.disabled')
    })

    it('can check Terms Of Service Checkbox', ()=>{
        cy.get('input[name=terms]')
            .type('[type="checkbox"]').check()
            .should('be.checked')
    })

    it('submit button should be DISABLED', () =>{
        cy.get('button').should('not.be.disabled')
    })
})