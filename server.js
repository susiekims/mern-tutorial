const express = require('express')
const mongoose = require('mongoose') // ORM: object-relational mapping
const bodyParser = require('body-parser')
const path = require('path')

// import routes
const items = require('./routes/api/items')

const app = express()

// body parser middleware
app.use(bodyParser.json())

// DB config
const db = require('./config/keys').mongoURI

// connecting to mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB: ', err))

// use routes
app.use('/api/items', items)

// serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Listening on port ${port}👩‍💻`))
