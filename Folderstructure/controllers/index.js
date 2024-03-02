const express = require('express');
const app = express();

app.get('/v1', (req, res) => {
    res.send('Hello World')
})

module.exports = app;