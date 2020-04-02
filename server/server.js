const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/math', (req, res) => {

});

app.post('/math', (req, res) => {
    console.log(req.body);

    const equation = req.body;

    if (equation.operation == "Add"); {
        equation.answer = parseInt(equation.num1) + parseInt(equation.num2);
    }
      else if (equation.operation == "Subtract"); {
        equation.answer = parseInt(equation.num1) - parseInt(equation.num2);
    }
    else if (equation.operation == "Multiply"); {
        equation.answer = parseInt(equation.num1) * parseInt(equation.num2);
    }
    else if (equation.operation == "Divide"); {
        equation.answer = parseInt(equation.num1) / parseInt(equation.num2);
    }


    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Listening on ports: ${PORT}`);
})

// Having trouble trouble shooting the terminal start up.

