module.exports = (app) => {
    const category = require ('../controllers/category')
    app.post('/category/create', category.create)
    app.put('/category/update/:id', category.update)
    app.get('/category/getAll', category.getAll)
    app.get('/category/getOne/:id', category.getOne)
}