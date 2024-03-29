const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./src/routes/routes')

const app = express()

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use(routes)


app.listen(3000, () => {
    console.log(`Express started at http://localhost:3000`)
})
