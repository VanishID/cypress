<h2>UI Автотесты на фреймворке Cypress</h2>

> **Статус проекта:**
> Публичный проект: https://login.qa.studio/
> 
> 🟢 Поддерживается (активный) 

## Описание проекта и задачи
Автоматизировать часть проверок регресса с помощью Cypress

## Тест-кейсы, которые автоматизировали
* Авторизация с верным паролем и верным логином
* Авторизация c верным логином и неверным паролем
* Проверка работы валиадации на наличие @ в логине
* Проверка флоу восстановления пароля
* Проверка приведения к строчным буквам в логине


## Детали реализации

1. baseUrl вынесен в переменные конфига
![image](https://github.com/VanishID/my_cypress/blob/main/settings.png)

2. Переменные данные для авторизации вынесены в отдельный файл
![image](https://github.com/VanishID/my_cypress/blob/main/per.png)

3. Каждая страница описана в формате объекта с локаторами
![image](https://github.com/VanishID/my_cypress/blob/main/locator.png)

## Локальный запуск тестов (из терминала)
1. Скачать проект
2. Перейти в терминале в директорию проекта
2. Выполнить команды:
```
npx cypress run --spec cypress/e2e/loginpassword.cy.js --browser chrome
npx cypress run --spec cypress/e2e/avatr.cy.js --browser chrome
```
Ожидаемый результаты: получим отчет о прохождении тестов.
![image](https://github.com/VanishID/my_cypress/blob/main/results1.png)
![image](https://github.com/VanishID/my_cypress/blob/main/test.png)


## Локальный запуск через Cypress UI
1. Скачать проект и открыть в терминале.
2. Перейти в директорию проекта.
3. В терминале в папке с проектом запустить npm `install --save-dev cypress@12.7.0`
4. В терминале в папке с проектом запустить npm `npm i`
5. В терминале в папке с проектом запустить npm `npx cypress open`
6. Выбрать в Cypress UI E2E тестирование и браузер Google Chrome
7. Выбрать спеку lesson_locators

Ожидаемый результат: получим отчет о прохождении тестов.
![image](https://github.com/VanishID/my_cypress/blob/main/ui.png)


## Автор

Иван Депутатов  ([Telegram](https://t.me/IvanD_QA), [Email](mailto:wanish666@yandex.ru))
