const express = require('express')
const port = 4000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.listen(port, console.log(`My Api running on ${port}`))