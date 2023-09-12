const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { PORT } = require('./config')

const userRouter = require('./routes/auth.routes')
const jobsRouter = require('./routes/jobs.routes')
const connectDB = require('./db')

const app = express()

app.use(bodyParser.json())
app.use(cors({ origin: '*' }))

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Job Portal' })
})

app.use('/users', userRouter)
app.use('/jobs', jobsRouter)
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
