# Type-Script
Type Script Learning
Type Script BackEnd Setup Guid:

https://www.typescriptlang.org/docs/handbook/type-compatibility.html
TypeScript Full Course – freeCodeCamp Typescript Course in 1 Shot in Hindi => https://www.youtube.com/watch?v=kvP6hDXWy88

-------------------------------- Node.js + TypeScript project
tsc —init => (create tsconfig.json file)
npm init -y  => (create node package.json file)
npm install -D typescript ts-node @types/node (Install TypeScript Dependencies with tsc and nodemo )
Index.html => (! than press Tab and enter and than add Script tag with dist folder path in body tag)
mkdir src dist (create folder for Development Soruce and Distribution)
tsc -w (Run watch mode of Project so every .js file updated automatically when ts files changes)
tsx = tsc + nodemon
tsx is faster run in memory 
npm install -D tsx (install tsx on Dev => Use tsx instead of ts-node)
npm install -D tsx typescript  @types/node (Install TypeScript Dependencies with tax and node)
npm install -D concurrently (install concurrently node package manager always install on root package.json)
npm Install -D vite (for frontend running on browser) 
npn run dev (run on dev for both backend and frontend)
tsx watch (use to run backend and also re-compiled when ever files change)
npm i some-libray (install some libraries with ought typescript types or they have in them not need separately)
npm i some-libray -D (install some libraries which need for dev environment only)
npm i -D @type/some-libray (install some libraries with their typescript types specifically)
—————————————————————————————-----------------------------
Frontend: Vite + TypeScript
Backend: Node.js + TypeScript

Project/ 
|── backend/  │     ├── src/  │     ├── dist/  │     ├── tsconfig.json  │     └── package.json |── frontend/  │     ├── index.html  │     └── package.json  |── node_modules/ ← only one, shared between frontend and backend  |── package-lock.json ← only one, shared between frontend and backend
|── package.json ← root
 Project/backend/package.json => to run the backend "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }, "devDependencies": {
    "@types/node": "^25.8.0",
    "tsx": "^4.22.0",
    "typescript": "^6.0.3"
  }
————————————————————————————————— Project/frontend/package.json => to run frontend "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
"devDependencies": {
    "vite": "^8.0.13"
  }
——————————————————————————————————— Project/package.json => to run from root "workspaces": ["backend", "frontend"], "scripts": {
    "dev": "concurrently \"npm run dev -w backend\" \"npm run dev -w frontend\"",
    "build": "npm run build -w backend && npm run build -w frontend"
  },
"devDependencies": {
    "concurrently": "^9.2.1"
  }  
—————————————————————————————————---------------------------------------------------------
Package           What it does                              Do you need it? 
axios           Makes HTTP requests to other APIs        Only if calling external APIs
express         Web server framework                     ✅ Yes — NestJS uses it under the hood
bcryptjs        Hashes passwords securely                ✅ Yes — already in your project
multer          Handles file/photo uploads               ✅ Yes — for photo uploads

———————————— React + TypeScript project —————————------------------------------------------
like this:

cd Documents/Work/
npm create vite@latest 
npm create vite@latest 
                   
Need to install the following packages:
create-vite@9.0.7
Ok to proceed? (y) y

> npx
> "create-vite"

│
◇  Project name:
│  react-typescript
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  TypeScript
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in /Users/afeefsohail/Documents/Work/react-typescript...
│
◇  Installing dependencies with npm...

added 152 packages, and audited 153 packages in 51s

42 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
│
◇  Starting dev server...

> react-typescript@0.0.0 dev
> vite


  VITE v8.0.13  ready in 1101 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
  
——————————————————————————————————— Bankend Api Project —-----------------------------------

TypeScript + Node.js + NestJs + Prisma + Redis + PostgresSQL

- [ ] Prerequisite :-
    - [ ] node --version
    - [ ] psql --version # Mac: brew install postgresql — Windows: download from postgresql.org — Linux: sudo apt install postgresql
    - [ ] redis-cli ping # should return PONG
    - [ ] npm install -g @nestjs/cli 
- [ ] Install :-  
    - [ ] cd project-backend # ENTER THE FOLDER
    - [ ] npm install # Install DEPENDENCIES ( This installs NestJS, Prisma, Passport JWT, Socket.io, Redis, Swagger and all other deps from package.json (~2 min) )
    - [ ] npx prisma generate # GENERATE PRISMA CLIENT
     
- [ ] Create your PostgresSQL database (Set up your local database):-
    - [ ] # START POSTGRESQL (IF NOT RUNNING) => brew services start postgresql
    - [ ] # CREATE THE DATABASE => psql -U postgres -c "CREATE DATABASE entourage_db;" 
    - [ ] # RUN PRISMA MIGRATIONS (CREATES ALL TABLES) => npx prisma migrate dev --name init
    - [ ] # VIEW YOUR DATABASE VISUALLY => npx prisma studio

- [ ] Set up environment variables (Copy .env.example → .env and fill in values):-
    - [ ] # CREATE YOUR .ENV FILE => cp .env.example .env
    - [ ] # FILL IN THESE VALUES (OPEN .ENV IN VS CODE) => code .env 
    - [ ] # GENERATE A SECURE RANDOM SECRET QUICKLY => node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
￼
- [ ] Run & Test :-
    - [ ] npm run start:dev
    - [ ] # OPEN SWAGGER API DOCS IN BROWSER => open http://localhost:3000/api/docs    

- [ ] Run everything with Docker (One command to start app + PostgreSQL + Redis together):-
    - [ ] # MAKE SURE DOCKER IS INSTALLED =>  docker --version
    - [ ] # START ALL SERVICES WITH DOCKER COMPOSE => docker-compose up --build (This starts: NestJS app on :3000, PostgreSQL on :5432, Redis on :6379 — all wired together automatically)
    - [ ] # STOP EVERYTHING => docker-compose down
    - [ ] # STOP AND WIPE THE DATABASE (FRESH START) => docker-compose down -v

- [ ] Recommended VS Code extensions
- [ ] • Prisma — syntax highlighting for schema.prisma
- [ ] • REST Client — test APIs right inside VS Code
- [ ] • Thunder Client — lightweight Postman alternative
- [ ] • Docker — manage containers from the sidebar
- [ ] • ESLint + Prettier — code formatting

# 1. Clean install (no old node_modules conflicts) npm install 
# 2. Copy env cp .env.example .env # Fill in your DATABASE_URL and JWT secrets
# 3. code .env # Fill in your DATABASE_URL and JWT secrets
# 4. Migrate npx prisma migrate dev --name fix_models 
# 5. Start npm run start:dev
# 6. # Create file in project => touch .gitignore
# 7. # Open file in VSCode => code .gitignore
# 8. # Tells Node.js to execute the JavaScript file named => node index.js
# 9. # npm list
# 10. node -v (current version of node on your system)
# 11. npm -v (node package manager current version on your system)
# 12. sudo npm install -g typescript ts-node nodemon => (install type script and ts node globally in your system once)
# 13. npm audit fix => (Then optionally fix safe issues)
# 13. tsc intro.ts  => complies into his java Script file (intro.ts → intro.js)
# 14. node intro.js => to run the Java Script code
# 15. npm install -g ts-node => (Install ts-node Then directly run TypeScript: ts-node intro.ts) 
 
