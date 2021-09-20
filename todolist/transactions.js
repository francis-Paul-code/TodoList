const taskName = require('./src/index.js')

const {Client} = require('pg')
const client = new Client({
    user:'francis',
    password:'Mylordwins',
    host:'localhost',
    database:'data',
    port:5433
})

async function newTask(){
    try{
        await client.connect()
        await client.query("BEGIN")
        await client.query("insert into mydata.tasks values($2)", [`${taskName}` ])
        const {rows} = await client.query("select * from mydata.tasks")
        console.table(rows)
    } 
    catch (er){
        console.log(`Error Occured: ${er}`)
        await client.query("ROLLBACK")
    }
    finally{
        console.log("Disconnected")
         await client.query("COMMIT")
    }
}


// async function loadTask(){
//     try{
//         await client.connect()
//         await client.query("BEGIN")
//         const {rows} = await client.query("select * from mydata.tasks");
//         console.table(rows)
//     } 
//     catch (er){
//         console.log(`Error Occured: ${er}`)
//         await client.query("ROLLBACK")
//     }
//     finally{
//         console.log("Disconnected")
//          await client.query("COMMIT")
//     }

// }

module.exports = {
    newTask
} 