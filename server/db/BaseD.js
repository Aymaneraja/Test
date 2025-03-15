import sql from "mssql"

// Database configuration
const dbConfig = {
  user: "ga",
  password: "9911admin--",
  server: "localhost", 
  database: "users",
  options: {
    trustedConnection:true , 
    enableArithAbort: true ,
    encrypt: false, // Set to true for Azure
    trustServerCertificate: true, // Required for self-signed certificates
    instancename:"SQLEXPRESS"
  },
};

// Function to connect to SQL Server
export async function connectDB() {
  try {
    let pool = await sql.connect(dbConfig);
    console.log("Connected to SQL Server!");
    return pool;
  } catch (error) {
    console.error("Database connection failed:", error);
  }
}

export default { connectDB, sql };
