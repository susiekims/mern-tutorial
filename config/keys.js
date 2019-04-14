if (process.env.NODE_ENV === 'production') {
  module.exports = {
    mongoURI: process.env.MONGO_URI,
    secretOrKey: 'SECRET'
  }
} else {
  module.exports = {
    mongoURI: require('./keys_dev').mongoURI
  }
}
