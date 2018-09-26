const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3200;

app.get('/', (req, res) => {
    res.send('What\'s up');
});

app.listen(port, function() {
    console.log(`App is running on port: ${port}`)
});
