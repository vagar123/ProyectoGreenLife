module.exports = (app) => {
    const donation = require('../controllers/donation')
    app.post('/donation/create', donation.create)
    app.put('/donation/update/:id', donation.update)
}