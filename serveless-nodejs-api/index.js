
const serverless = require("serverless-http");
const express = require("express");
const app = express();
const {neon} = require('@neondatabase/serverless')

async function dbClient(){
  const sql = neon(process.env.DATABASE_URL);
  // return process.env.DATABASE_URL ? process.env.DATABASE_URL : "Not Found";
  return sql;
}

app.get("/", async(req, res, next) => {
  
  const db = await dbClient();
  const result = db`Select now()`
  
  
  return res.status(200).json({
    
    message: "Hello from root!",
  });
});

app.get("/path", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
    DATABASE_URL: process.env.DATABASE_URL ? process.env.DATABASE_URL : "Not Found",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
module.exports.handler = serverless(app);
