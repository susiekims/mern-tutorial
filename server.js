const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('./routes/api/items')

const app = express()

// body parser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// connecting to mongo
mongoose.connect(db, { useNewUrlParser: true })
	.then(() => console.log('Connected to MongoDB'))
	.catch(err => console.error('Error connecting to MongoDB: ', err))

// use routes
app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}👩‍💻`))