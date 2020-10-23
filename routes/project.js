module.exports = (app) => {
    const project = require ('../controllers/project')
    app.post('/project/create', project.create)
    app.put('/project/update/:id', project.update)
}