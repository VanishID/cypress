const data = require("../userdata/default_data.json");


describe('Покупка аватара', function () {

    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get('#k_email').type ('login_avatar');
         cy.get('#k_password').type ('password_avatar');
         cy.get('.MuiButton-root').click();
         cy.get('.header_card_trainer').should('be.visible');
         cy.get('.header_card_trainer').click();
         cy.get('[data-qa="shop"] > .k_trainer_in_button_wrapper > .k_trainer_in_button_title_no_desc').should('be.visible');
         cy.get('[data-qa="shop"] > .k_trainer_in_button_wrapper > .k_trainer_in_button_title_no_desc').click();
         cy.get('.shop_page > .content').should('be.visible');
         cy.get('.available > button').first().click();
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').should('be.visible')
         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type ('4627100101654724');
         cy.get(':nth-child(1) > .style_1_base_input').type ('1226');
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type ('125');
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type ('name');
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
         cy.get('.payment_form_card_form').should('be.visible');
         cy.get('.style_1_base_input').type ('56456');
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click();
         cy.get('.payment_status_top').should('be.visible');
         cy.get('.payment_status_top').contains ('Покупка прошла успешно') ;
         cy.get('.success__image').should('be.visible');

  });
        
     })