const express = require('express');
const routes = require('./routes/routes.js')
const cors = require('cors')
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);


app.get('/hello', (req, res) => {
    res.send('Welcome')
});

app.listen(5000, (req, res) => {
    console.log('listening on port 5000')
});