const express = require('express');
const app = express();
const bodyParser = require ('body-parser');
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen({PORT, () => {
console.log('Listening on ports: ${PORT}');
})

// Having trouble trouble shooting the terminal start up.

