/// <reference types="cypress" />
import exp from 'constants'
import {times} from 'lodash'

 describe ('Test Case',() => {

it('Test Case 1',()=>{

    cy.visit('http://jupiter.cloud.planittesting.com')
    //cy.contains('Contact').click() //click con`tact method 1
    cy.get('#nav-contact >a').click()
    cy.get('.btn-contact').click()
    cy.get('#forename').type('Olawale')
    cy.get('#email').type('oadu@humanoid.net')
    cy.get('#message').type('I do hope you are enjoying the show so far :)')
    cy.contains('get it unless you complete the form correctly').should('not.exist')

})
})


var i=0;
for(i = 0; i<5; i++) {
    describe ('TRY '+i,() => {it ('Test Case 2',()=>{
        cy.visit('http://jupiter.cloud.planittesting.com')
     //cy.contains('Contact').click() //click contact method 1
     cy.get('#nav-contact >a').click()
     cy.get('.btn-contact').click()
     cy.get('#forename').type('Olawale')
     cy.get('#email').type('oadu@humanoid.net')
     cy.get('#message').type('I do hope you are enjoying the show so far :)')
     cy.get('.btn-contact').click()
     cy.wait(8000)
     cy.contains('Thanks Olawale, we appreciate your feedback.')


})
    })
} 

describe ('Test Case 3',() => {
    it('Test Case 3',()=>{
    cy.visit('http://jupiter.cloud.planittesting.com')
    //cy.contains('Contact').click() //click con`tact method 1
    cy.get('#nav-shop > a').click()
    cy.get('#product-6 > div > p > .btn').click()
    cy.get('#product-6 > div > p > .btn').click()
    cy.get('#product-4 > div > p > .btn').click()
    cy.get('#nav-cart > a').click()
    cy.get('tbody > :nth-child(1) > :nth-child(1)').contains('Funny Cow')
    cy.get('tbody > :nth-child(1) > :nth-child(4)').contains('$21.98')
    cy.get('tbody > :nth-child(2) > :nth-child(1)').contains('Fluffy Bunny')
    cy.get('tbody > :nth-child(2) > :nth-child(4)').contains('$9.99')
    



})
})

describe ('Test Case 4',() => {
       it('Test Case 4',()=>{
    cy.visit('http://jupiter.cloud.planittesting.com')
    cy.get('#nav-shop > a').click()
    cy.get('#product-2 > div > p > .product-price').invoke('text').then((text)=>{
    const PRICE=text;
    var trimPRICE=PRICE.replace('$','') //get the price of stuffed frog and remove the $ sign by replacing it 
    cy.get('#product-4 > div > p > .product-price').invoke('text').then((text1)=>{
        const PRICE1=text1;
        var trimPRICE1=PRICE1.replace('$','')//get the price of Fluffy Bunny and remove the $ sign by replacing it 
        cy.get('#product-7 > div > p > .product-price').invoke('text').then((text2)=>{
            const PRICE2=text2;
            var trimPRICE2=PRICE2.replace('$','')//get the price of Valentine Bear and remove the $ sign by replacing it 
                                     
                                 
        
    times(2, ()=>{
    cy.get('#product-2 > div > p > .btn').click()}) //Click 'buy' stuffed frog twice
    times(5, ()=>{
    cy.get('#product-4 > div > p > .btn').click()})//Click 'buy' Fluffy Bunny 5 times
    times(3, ()=>{
    cy.get('#product-7 > div > p > .btn').click()})//Click 'buy' Valentine Bear 3 times
    cy.get('#nav-cart > a').click() //click cart
    cy.get('tbody > :nth-child(1) > :nth-child(2)').invoke('text').then((textt1)=>{
    const FinalTotal=textt1;
    var trimfinal1=FinalTotal.replace('$','');
     expect(trimPRICE).to.eq(trimfinal1) //verify the price of product 1 on the cart is the same as the shopping page
    cy.get('tbody > :nth-child(2) > :nth-child(2)').invoke('text').then((textt2)=>{
        const FinalTotal1=textt2;
        var trimfinal2=FinalTotal1.replace('$','')
        expect(trimPRICE1).to.eq(trimfinal2)//verify the price of product 2 on the cart is the same as the shopping page
        cy.get('tbody > :nth-child(3) > :nth-child(2)').invoke('text').then((textt3)=>{
            const FinalTotal2=textt3;
            var trimFinal3=FinalTotal2.replace('$','')
            expect(trimPRICE2).to.eq(trimFinal3)//verify the price of product 3 on the cart is the same as the shopping page
            cy.get('tbody > :nth-child(1) > :nth-child(4)').invoke('text').then((calc)=>{
                const Calculation=calc;
                var total1=Calculation.replace('$','')  
                })
                            })
    
              
        })
            
    })

    })
   
    })       
    })
})
})