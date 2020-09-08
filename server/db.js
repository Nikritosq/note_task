const Pool = require('pg').Pool;

//user has default name after get installed, password is mine, host - default, database - what we created in database.sql, port - default

const pool = new Pool({
    user: "postgres",
    password: "1378",
    host: "localhost",
    database: "perntodo",
    port: 5432
});

module.exports = pool;