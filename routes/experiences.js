module.exports = (app) => {
    const experiences = require('../controllers/experiences');
    app.post('/experiences/create', experiences.create);
    app.put('/experiences/update/:id', experiences.update);
    app.get('/experiences/getAll', experiences.getAll);
    app.get('/experiences/getOne/:id', experiences.getOne);
    app.get('/experiences/deleteOne/:id', experiences.deleteOne);
}