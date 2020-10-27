module.exports = (app) => {
    const donation = require('../controllers/donation')
    app.post('/donation/create', donation.create)
    app.put('/donation/update/:id', donation.update)
    app.get('/donation/getAll', donation.getAll)
    app.get('/donation/getOne/:id', donation.getOne)
    app.delete('/donation/delete/:id', donation.deleteOne)
}