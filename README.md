# Note Task #

[![Website](https://img.shields.io/website?label=Node%20Task&down_color=lightgrey&down_message=Node%20Task&style=flat-square&up_color=%23f50057&up_message=TRY&url=https%3A%2F%2Fnotesaionystask.web.app%2F)](https://notesaionystask.web.app/)

Test preview on Firebase <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png" height = "20px">

Web app on PERN Stack with Puppeteer testing

<img class="weblist" align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/visual-studio-code/visual-studio-code.png" /><img class="weblist" align="left" alt="Visual Studio Code" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sql/sql.png" /><img class="weblist" align="left" alt="HTML5" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" /><img class="weblist" align="left" alt="CSS3" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" /><img class="weblist" align="left" alt="Sass" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" /><img class="weblist" align="left" alt="JavaScript" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" /><img class="weblist" align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png" /><img class="weblist" align="left" alt="React" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" /><img class="weblist" align="left" alt="Node.js" width="26px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" /><img class="weblist" align="left" alt="GitHub" width="26px" src="https://habrastorage.org/webt/mr/mp/vo/mrmpvoy3c9sicju-zbxkob3i-3w.png" /><img class="weblist" align="left" alt="GitHub" width="26px" src="https://raw.githubusercontent.com/github/explore/78df643247d429f6cc873026c0622819ad797942/topics/github/github.png" />
<br/>
## Something before we start ##

I added quite detailed comments to every action in code so if YOU lost or I missed something YOU can look at them and use those tips.
## How to install and run ##
After YOU Downloaded zip and unpackaged or cloned this repository open folder of this project in text editor (VS Code, Atom, etc.)
**To start and realy see our result in browser we need install node modules.**
As well as I uploaded package.json
All YOU need to run in each of directory (in client and server) in terminal:
```bash
npm install
```
To jump into directory through terminal use:
```bash
cd directory_name
```
**After finishing downloading all packages in every needed directory YOU can start server and run client side**
SERVER:
```js
nodemon index.js
```
I use nodemon for automaticli runing server after any changes.

CLIENT:
```bash
npm start
```

### If there is problems with *npm install* we can do next:

Create new two empty foldes with names 'client' and 'server'.
Open 'server' with VS Code and run in terminal:
```bash
npm init
```
This will ask few questions, nothing special, we just pressing 'Enter' on every one. After we type:
```bash
npm i express pg cors
```

Open 'client' with VS Code and run in terminal:
```js
npx create-react-app any_name
```
As all was done we still need several utilits, so we type:
```bash
npm install @material-ui/core
npm install @material-ui/icons
npm install i18next --save
npm install i18next-http-backend
npm install i18next-browser-languagedetector
npm install node-sass --save
npm install jest
npm install puppeteer
```

## PostgreSQL

We need a data base, but we won't use too popular MongoDB.
So we are installing [PostgreSQL][downloadlink]!
Nothing special - we dont need any scecific packages and don't change any variables during the installation. Only what have to be setted up is password. Enter everything YOU want. After finishing of it we can open our ```cmd``` and run 
```bash
psql -U postgres
```
The Command Prompt will ask YOU a password what YOU setted durind downloading.
**WARNING!** The terminal won't show YOU symbols YOU're entering.
After we entered to PosgreSQL we actualy can make data base:
In server derectory I've prepeared code that we should enter in file database.sql.
It should look like 
```sql
CREATE DATABASE database__name;

CREATE TABLE note(
    n_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    hashtag VARCHAR(255)
);
```
After we can enter this database:
```sql
\c database__name
```
We quite finnished with it, there is nothing to do, but you want to experiment with it!
So only thing after this is we need in server folder in db.js change some varibles:
```js
const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres", //default name of user
    password: "password", //password what you setted
    host: "localhost", //we are using local host so this is what should be
    database: "database__name", //change name on dependancy how YOU named it
    port: 5432 //port - default
});

module.exports = pool;
```
### Useful Tip ###
If there is some problrms with this, then add new variavle to path manualy:
find in **Windows Parameters** Changing enviroment variables - it opens tab *System settings* - there is button **Enviroment settings/parameters** - Must choose *PATH* and press **Edit** - **Add** and insert the way to *PostgreSQL\12\bin* and *PostgreSQL\12\lib*
And run PostgreSQL through PowerShell
If there is 'No rights' message in terminal - also in PowerShell:
```PowerShell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
```

## Testing ##

We've downloaded all dependencies, so nothing special
The testing file is App.test.js. Make sure YOU are in client directory.

We can run test with ```npm test```, but make sure that in package.json in object scripts.test YOU have value of *jest*. Other way we can run it by node, as well as this file is in src folder we do: 
```bash
cd src
node App.test.js
```
And watch how puppeteer working!

**WARNING!** If terminal says there is *test* undefind look at App.test.js file and comment on same row with *test*

# I HOPE EVERYTHING WORK ON YOUR SIDE!

[downloadlink]: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
