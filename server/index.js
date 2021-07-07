const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const FakeDb = require('./fake-db')

const productRoutes = require('./routes/products')

//await 
mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  //useFindAndModify: false, 
  //useCreateIndex: true
}).then(
  () => {
    const fakeDb = new FakeDb()
    // fakeDb.seeDb()
    fakeDb.initDb()
  }
)

const app = express()

app.use('/api/v1/products', productRoutes)


const PORT = process.env.PORT || '3001'

app.listen(PORT, function() {
    console.log('I am running!')
})


