const express = require('express') //Estamos utilizando express en nuestro proyecto.
const cors = require('cors')
const bodyparser = require('body-parser')

const { conectDB } = require('./db')
const port = process.env.PORT || 3000
const app = express() //Se convierte a la cconstante express en un objeto por el cual se va a trabajar

app.use(cors())
app.use(bodyparser.json())

conectDB() //Ejecutando la conexion a la base de datos


require('./routes/donation')(app)
require('./routes/newsletters')(app)
require('./routes/project')(app)
require('./routes/user')(app)
require('./routes/experiences')(app)




app.listen(port, () => {
    console.log('Bienvenido a GreenLife')
})