import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import route from "./routes/gradReqs.mjs";

const PORT = process.env.port || 5050
const app = express()

app.use(cors())
app.use(express.json())
app.use(route)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})