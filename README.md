# GUESSES APP

Vision Craft guesses game app.

## Technologies Used

---

-   Node.js
-   Express
-   Sequelize
-   React
-   Typescript
-   Elephant sql (postgresql)

## To access/run the app

---

-   Clone repository - git clone https://github.com/mbilesanmi/guess-the-word.
-   install all server packages `npm i`
-   install all client packages `cd client && npm i`
-   install sequelize globally
-   create postgresql db and insert the `dbUrl` to `.env` file. If no `.env` exists, create new one similar to the `.env-sample`.
-   run migrations `sequelize db:migrate`
-   start server app `npm run dev:nodemon` or `npm run dev`
-   start client app `npm start`

## Some Future Features/Improvement

---

-   Config for CI/CD
-   Better error handling
-   More FE integration and api consumption
-   More api functionality (e.g delete & update user, delete question)
-   Ensure questions cannot be updated after guess has been saved

## Endpoints

---

| EndPoint                      | Functionality         | Request-Body (type) | Params     |
| ----------------------------- | --------------------- | ------------------- | ---------- |
| POST /api/users               | Create user           | username(string)    | -          |
| GET /api/users                | Get all users         | -                   | -          |
| GET /api/user/:userId         | Gets one user         | -                   | userId     |
| GET /api/question/:userId     | Get question for user | -                   | userId     |
| PUT /api/question/:questionId | Save user's guess     | guesses (string)    | questionId |

## Contributing

---

1. Fork this repository to your account.
2. Clone your repository: git clone https://github.com/mbilesanmi/guess-the-word.
3. Commit your changes: git commit -m "do something".
4. Push to the remote branch: git push origin new-feature.
5. Open a pull request.

#### Licence

---

ISC

Copyright (c) 2021 Maranatha A Ilesanmi
