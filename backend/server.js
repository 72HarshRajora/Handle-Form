import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import { emp } from "./models/empSchema.js"

let conn = mongoose.connect(process.env.MONGO_URL)
conn.then(()=> console.log("Mongodb Connected Successfully")).catch(err => console.log(err))
const app = express()
const port = process.env.PORT || 5000

app.use(cors({
  origin: "https://72harshrajora.github.io",
  methods: ["GET", "POST"],
  credentials: true
}))
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



