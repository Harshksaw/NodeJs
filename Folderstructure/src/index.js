const express = require("express")

const dotenv = require("dotenv")
dotenv.config()
const app = express()
const customRouter = require("../routes/index")

app.use(router);
app.use('/api', customRouter)

app.get("/", (req, res) => {
    res.send("Hello World")
})



app.listen(3000, () => {
    console.log("Server is running on port 3000")
})