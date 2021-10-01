const Pool = require('pg').Pool
const pool = new Pool({
    user:'francis',
    password:'Mylordwins',
    host:'localhost',
    database:'data',
    port:5432
})

module.exports= pool;