const express = require('express')
const cors = require('cors')
const db = require('./database/db')

const controllers = require('./controllers')
const verifyToken = require('./middlewares/verifyToken')
const controllersFactura = require('./controllers/venta')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/user/', verifyToken, controllers.getUserById)
app.post('/register', controllers.register)
app.post('/login', controllers.login)
app.post('/addmovie', controllers.addmovie)

app.get('/getmovies', controllers.getmovies)
app.get('/getfacturas', controllers.getfacturas)

app.delete('/deletemovies/:id', controllers.deletemovies)

app.get('/users', controllers.getusers)

app.post('/increcreditos/', controllers.editcredits)

app.post("/factura", controllersFactura.crearFactura);

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server funcionando en el puerto ${PORT}`);
    db();
})

module.exports = app
