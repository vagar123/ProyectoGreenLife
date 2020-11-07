
const CategoryModel = require('../models/category')

/**
 * Método para CREAR un nuevo usuario
 * @param {*} req => Todo lo que enviamos desde el body (formulario)
 * @param {*} res => La respuesta
 */


exports.create = (req, res) => {

    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            menssage: 'Los datos son obligatorios'
        })
    }
    const category = new CategoryModel({
        name: req.body.name,
    })

    category.save()
        .then((dataCategory) => {

            res.send(dataCategory)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.menssage
            })
        })

}

/**
 * SIEMPRE PORNERLO SI VAMOS A MANEJAR RUTAS
 * Método para ACTUALIZAR un nuevo usuario
 * @param {*} req => Todo lo que enviamos desde el body (formulario)
 * @param {*} res => La respuesta 
 */

exports.update = (req, res) => {

    /**
     * Validaos que todos los campos del formulario este lleno
     *
     */
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            menssage: 'Los datos son obligatorios'
        })
    }

    const category = {
        name: req.body.name,    
    }

    /**
     * findByIdAndUpdate => Método de mongoose que permite buscar por id y actualicar un usuario. Tiene los parametros:
     * - el id del usuario => req.params.id es el id que se envia por la URL
     * -los datos nuevos
     */

    CategoryModel.findByIdAndUpdate(req.params.id, category,{new:true})
        .then(
            (CategoryUpdate) => {
                res.send(CategoryUpdate)
            }
        )
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.menssage
                })
            }
        )
}


/**
 * Método para para listar todos los usuarios
 * @param {*} req => Todo lo que se recibe
 * @param {*} res => Respuesta que devuelve
 */

exports.getAll =(req,res) =>{
    CategoryModel.find() //Método el cual nos permite traer los datos de la coleccion con a que se tiene la relacion
    
    .then((categorys) => {res.send(categorys)})
    .catch((error) => {
        res.status(500).send({message: error.message})
    })

}

/**
 * Método para para listar un usuario
 * @param {*} req => Todo lo que se recibe
 * @param {*} res => Respuesta que devuelve
 */

exports.getOne =(req,res) =>{
    
    CategoryModel.findById(req.params.id) //Método el cual nos permite traer los datos de la coleccion con a que se tiene la relacion
    
    .then((category) => {res.send(category)})
    .catch((error) => {
        res.status(500).send({message: error.message})
    })
}

/**
 * Método para para eliminar un usuario por el id
 * @param {*} req => Todo lo que se recibe
 * @param {*} res => Respuesta que devuelve


exports.deleteOne =(req,res) =>{
    CategoryModel.findByIdAndRemove(req.params.id)
    .then((categorys) => {res.send(categorys)})
    .catch((error) => {
        res.status(500).send({message: error.message})
    })
}*/
