<h2>UI Автотесты на фреймворке Cypress</h2>

> **Статус проекта:**
> Публичный проект: https://login.qa.studio/
>                   https://pokemonbattle.ru/
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
<img width="1919" height="880" alt="Image" src="https://github.com/user-attachments/assets/b8fdc092-81b8-46b8-be4c-dcf2140274d2" />

2. Переменные данные для авторизации вынесены в отдельный файл
<img width="1919" height="880" alt="Image" src="https://github.com/user-attachments/assets/21b768ed-4cce-4a98-a2e5-d37884664f1f" />

3. Каждая страница описана в формате объекта с локаторами
<img width="1918" height="823" alt="Image" src="https://github.com/user-attachments/assets/cdf3796c-1406-4d43-b69a-6eb30427f679" />

4. Использование хуков beforeEach и afterEach
<img width="1572" height="199" alt="Image" src="https://github.com/user-attachments/assets/6f804fa6-40b0-42d2-bae5-761311a385b7" />

## Локальный запуск тестов (из терминала)
1. Скачать проект
2. Перейти в терминале в директорию проекта
2. Выполнить команды:
```
npx cypress run --spec cypress/e2e/loginpassword.cy.js --browser chrome
npx cypress run --spec cypress/e2e/avatar.cy.js --browser chrome
```
Ожидаемый результаты: получим отчет о прохождении тестов.
<img width="1168" height="695" alt="Image" src="https://github.com/user-attachments/assets/01c86607-88b8-488d-8d9e-4ebe093148a6" />
<img width="1170" height="733" alt="Image" src="https://github.com/user-attachments/assets/3e9c0790-404e-42df-b728-c4e0b2ea07b9" />


## Локальный запуск через Cypress UI
1. Скачать проект и открыть в терминале.
2. Перейти в директорию проекта.
3. В терминале в папке с проектом запустить npm `install --save-dev cypress@12.7.0`
4. В терминале в папке с проектом запустить npm `npm i`
5. В терминале в папке с проектом запустить npm `npx cypress open`
6. Выбрать в Cypress UI E2E тестирование и браузер Google Chrome
7. Выбрать спеки avatar или loginpassword

Ожидаемый результат: получим отчет о прохождении тестов.
<img width="1200" height="891" alt="Image" src="https://github.com/user-attachments/assets/a53bb5c3-f2d7-44ba-a4da-16fc122795e9" />



## Автор

Иван Депутатов  ([Telegram](https://t.me/IvanD_QA), [Email](deputatovivan272@gmail.com))
