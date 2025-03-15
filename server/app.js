import express from "express" 
import cors from "cors" 
import mssql from "mssql"

const app = express() ; 
app.use(cors())

app.get('/' , (req,res)=>{
    return res.json("Hi , you are in backend ") ; 
})

const config={
    user:"ga" , 
    password:"admin123" , 
    server:"localhost" , 
    database:"users" , 
    options:{
        trustedConnection:true , 
        enableArithAbort: true ,
        trustServerCertificate: true, // Required for self-signed certificates
        instancename:"SQLEXPRESS" , 
    } , 
    port :1433 
}

export async function connectDB() {
    try {
      const pool = await sql.connect(config);
      const data = pool.request().quey('select * from users')
      data.then(res1=>{
        return res.json(res1);
      })
    } catch (error) {
      console.error("Database connection failed:", error);
    }
  }

app.listen(3100, ()=>{
    console.log("The server has started finally")
})