require('dotenv').config()
const app = require("./src/app");
const connectToDb = require("./src/db/db");




const PORT=process.env.PORT||3000;

connectToDb()
app.listen(PORT,()=>{
    console.log(`server started ${PORT}`)
})