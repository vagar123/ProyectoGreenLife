module.exports = (app) => {
    const newsletters = require('../controllers/newsletters')
    app.post('/newsletters/create', newsletters.create)
    app.put('/newsletters/update/:id', newsletters.update)/**Enlace actualizar */
}