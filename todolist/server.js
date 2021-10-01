const { response } = require("express");
const express =  require("express");
const path = require("path");
const pool = require('./src/transactions')
const app = express();
 app.use(express.json())

 app.get('/', function(request, response){
     response.sendFile(path.join(__dirname, 'src','index.html'));
 })

app.post('/api', async(req,res)=>{
    try {
        console.log("Recieved");
        await pool.connect();
        await pool.query("BEGIN");
        const task = req.body;
        //const sendTask = await pool.query("INSERT INTO mydata.tasks(task) VALUES ($1)", [])
        for (let value of Object.values(task)) {
            await pool.query("INSERT INTO mydata.tasks(task, created_on) VALUES ($1, current_timestamp);", [value])
            const {rows} = await pool.query("SELECT * FROM mydata.tasks;");
            console.table(rows);

        }
        await pool.query("COMMIT");
        console.log("Task Has Been Added")
        res.json({
            status:"success",
            task
        })
    } catch (er) {
        console.error(er.message)
    }
    
})
app.get('/tasks', async(req, res) => {
    try {
        console.log("recieved")
        await pool.connect();
        await pool.query("BEGIN");
        const {rows} = await pool.query("SELECT task FROM mydata.tasks");
        //const task = req.body
        res.json({
            status:"success",
            body:rows
        })
        //console.table(rows[0])
    } catch (error) {
        console.log(error)
    }
})
app.delete('/tasks', async(req , res) => {
    try {
        console.log('Recieved')

        res.json({
            status:'Success',
            
        })
    } catch (error) {
        console.log('error')
    }
})
 app.use(express.static('src'));

app.listen(3030, function(){
    console.log("Server is Running")
}); 

