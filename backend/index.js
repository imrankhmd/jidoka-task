const express = require("express")
const app = express()
const authRouter = require("./Routes/Auth")
const connection =require("./db/db")
const cors = require("cors")
const userRouter = require("./Routes/user")

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors({origin:"*"}))

app.use("/auth", authRouter)
app.use("/", userRouter)


const PORT = process.env.PORT || 8080

app.listen(PORT, async() => {
  await connection
    console.log('listening on http://localhost:7070')
})


