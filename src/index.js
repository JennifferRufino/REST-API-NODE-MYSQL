const express = require("express");

const app = express();

//const employRota = require('./routes/employees');

//Configurações
app.set('port', process.env.PORT || 3000);

app.use(express.json());

//Rotas
app.use(require('./routes/employees'));

app.listen(app.get('port'), () => {
    console.log("Servidor na porta" + " "+ app.get('port'));
})