const data = require("../userdata/default_data.json");
const main_page = require("../locators/main_page.json");
const recovery_password_page= require("../locators/recovery_password_page.json")
const result_page = require("../locators/result_page.json")

describe('Проверка авторизации', function () { 
                                                
                                                
    beforeEach('Начало теста', function () {
        cy.visit('/');
        cy.get(main_page.forgot_pass_button).should('have.css', 'color', 'rgb(0, 85, 152)');
        });

    afterEach('Окончание теста', function () {
        cy.get(result_page.title).should('exist');
        });

     it('Верный логин и верный пароль', function () {
        cy.get (main_page.email).type (data.login); 
        cy.get (main_page.password).type (data.password); 
        cy.get(main_page.login_button).click(); 
        cy.get(result_page.title).contains ('Авторизация прошла успешно')
        cy.get(result_page.title).should('be.visible');
        });

    it('Верный логин и неверный пароль', function () {
        cy.get (main_page.email).type (data.login); 
        cy.get (main_page.password).type (data.wrong_password); 
        cy.get(main_page.login_button).click(); 
        cy.get(result_page.title).contains ('Такого логина или пароля нет')
        cy.get(result_page.title).should('be.visible');
       });

     it('Проверка валидации input логин, проверка, что есть @', function () {
        cy.get (main_page.email).type (data.login_validation); 
        cy.get (main_page.password).type (data.password); 
        cy.get(main_page.login_button).click(); 
        cy.get(result_page.title).contains ('Нужно исправить проблему валидации')
        cy.get(result_page.title).should('be.visible');
       });

        it('Проверка восстановление пароля', function () {
        cy.get(main_page.fogot_pass_button).click();
        cy.get(recovery_password.title).should('be.visible');
        cy.get(recovery_password.email).should('be.visible');
        cy.get(recovery_password.send_button).should('be.visible');
        cy.get(recovery_password.email).type (data.login);
        cy.get(recovery_password.send_button).click();
        cy.get(result_page.title).contains ("Успешно отправили пароль на e-mail");
        cy.get(result_page.title).should('be.visible');
        });

        it('Приведение к строчным буквам в логине', function () {
        cy.get(main_page.email).type(data.LOGIN);
        cy.get(main_page.password).type(data.password);
        cy.get(main_page.loginButton).click();
        cy.get(result_page.title).should('be.visible');
        cy.get(result_page.title).contains('Авторизация прошла успешно');
        });
})