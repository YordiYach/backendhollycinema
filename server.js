const express = require('express')
const cors = require('cors')
const db = require('./database/db')

const controllers = require('./controllers')
const verifyToken = require('./middlewares/verifyToken')
const controllersFactura = require('./controllers/venta')

const app = express()

app.use(cors())
app.use(express.json())
//user
app.get('/user/', verifyToken, controllers.getUserById)
//user
app.post('/register', controllers.register)
//user
app.post('/login', controllers.login)
//admin
app.post('/addmovie', controllers.addmovie)
//user
app.get('/getmovies', controllers.getmovies)
//user
app.get('/getfacturas', verifyToken ,controllers.getfacturas)
//admin
app.delete('/deletemovies/:id', controllers.deletemovies)
//admin
app.get('/users', controllers.getusers)
//admin
app.post('/addcredits', controllers.agregarCreditos)
//user
app.post("/factura", verifyToken,controllersFactura.crearFactura);

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server funcionando en el puerto ${PORT}`);
    db();
})

module.exports = app
