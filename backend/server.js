import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import { emp } from "./models/empSchema.js"

let conn = mongoose.connect("mongodb://localhost:27017/Employee")
conn.then(()=> console.log("Mongodb Connected Successfully")).catch(err => console.log(err))
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/employee', async (req, res) => {
    const data = new emp(req.body);
    await data.save();
  res.send('Data saved successfully!')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

