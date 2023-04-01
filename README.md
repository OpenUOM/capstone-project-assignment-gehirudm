# Capstone Project - Trainee Full-Stack Developer Program

This is the capstone project of the Trainee Full-Stack Developer Programme offered by University of Moratuwa (https://open.uom.lk/). In this project, you will create an information management system for a school. The following technologies are used.

- Frontend: Angular
- Backend: Node js and Express
- Database: SQLite

For more details check [the detailed documentation](/docs/README.md).

Previous `package.json` test commands

#### On Root Level
```json
"test": "npm i forever --prefix ./frontend && export NODE_ENV=test-backend && NODE_OPTIONS='--experimental-vm-modules --experimental-specifier-resolution=node' jest --verbose ./backend/test --forceExit"
```

#### On Frontend
```json
"test": "npm i && npm i forever && export NODE_ENV=test && forever start --minUptime 30000 ../backend/index.js && forever start --minUptime 30000 node_modules/@angular/cli/bin/ng serve --port 4000 --configuration=test && sleep 20 && testcafe chrome:headless ./test"
```
