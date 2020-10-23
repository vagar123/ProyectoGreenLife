module.exports = (app) => {
    const experiences = require('../controllers/experiences');
    app.post('/experiences/create', experiences.create);
    app.put('/experiences/update/:id', experiences.update);
}