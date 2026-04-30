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
<img width="1678" height="801" alt="Image" src="https://github.com/user-attachments/assets/6512ea0c-a33f-4e92-8763-9c9bffd51dd5" />

2. Переменные данные для авторизации вынесены в отдельный файл
<img width="1680" height="891" alt="Image" src="https://github.com/user-attachments/assets/0e8fba9d-7f4b-4191-8b21-5a8764d28d10" />

3. Каждая страница описана в формате объекта с локаторами
![image](https://github.com/VanishID/my_cypress/blob/main/locator.png)

## Локальный запуск тестов (из терминала)
1. Скачать проект
2. Перейти в терминале в директорию проекта
2. Выполнить команды:
```
npx cypress run --spec cypress/e2e/loginpassword.cy.js --browser chrome
npx cypress run --spec cypress/e2e/avatar.cy.js --browser chrome
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
7. Выбрать спеки avatar или loginpassword

Ожидаемый результат: получим отчет о прохождении тестов.
![image](https://github.com/VanishID/my_cypress/blob/main/ui.png)


## Автор

Иван Депутатов  ([Telegram](https://t.me/IvanD_QA), [Email](mailto:wanish666@yandex.ru))
