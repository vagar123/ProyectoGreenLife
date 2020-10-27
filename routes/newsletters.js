module.exports = (app) => {
    const newsletters = require('../controllers/newsletters')
    app.post('/newsletters/create', newsletters.create)
    app.put('/newsletters/update/:id', newsletters.update)/**Enlace actualizar */
    app.get('/newsletters/getAll', newsletters.getAll)
    app.get('/newsletters/getOne/:id', newsletters.getOne)
    app.delete('/newsletters/deleteOne/:id', newsletters.deleteOne)

}