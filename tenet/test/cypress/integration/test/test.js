/// <reference types="cypress" />

const HOMEPAGE = "http://localhost:3000/";

describe('first test',()=>{

    it('Is home page up',()=>{

        cy.visit(HOMEPAGE)

    })


    it('Test header',()=>{
        cy.visit(HOMEPAGE)
        
        cy.get('.data').click()
        cy.wait(1000)
       // cy.get('.contact').click()
        //cy.get('.abouts').click()
        //cy.get('.infos').click()
        cy.get('.homes').click()
    
    })


    it('Home page',()=>{

        //go to URL
        cy.visit(HOMEPAGE)

        cy.get('.homes').click()
        cy.contains('How loud is too loud?').should('exist')
        cy.scrollTo('bottom')
        cy.get('.active').click()
       
    })

    it ('Data page',()=>{
        
        cy.visit(HOMEPAGE)
        cy.get('.data').click()
        
        
    })
})
