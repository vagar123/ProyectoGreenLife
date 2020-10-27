module.exports = (app) => {
    const project = require ('../controllers/project')
    app.post('/project/create', project.create)
    app.put('/project/update/:id', project.update)
    app.get('/project/getAll', project.getAll)
    app.get('/project/getOne/:id', project.getOne)
    app.delete('/project/delete/:id', project.delete)
}