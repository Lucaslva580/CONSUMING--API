const express = require('express')
const app = express()

app.get('/', (req, res) => {
    return res.json([
        {name: 'jeff'},
        {name: 'diego'}
    ])
})

app.listen('8080')