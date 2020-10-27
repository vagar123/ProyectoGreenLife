const newslettersModel = require('../models/newsletters')
const newsletters = require('../routes/newsletters')

exports.create = (req, res) => {

    if(Object.entries(req.body).length==0){
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        })
    }

    const newsletters = new newslettersModel({

        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        status: req.body.status,
        user: req.body.user
    })

    newsletters.save()
    .then((dataNewsletters) => { res.send(dataNewsletters) })
    .catch((error) => {
        res.status(500).send({
            message: error.message
        })
    })
}

exports.update = (req, res) =>{

    if(Object.entries(req.body).length==0){
        return res.status(400).send({
            message: 'Los datos son obligatorios.'
        })
    }

    const newsletters = {
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        status: req.body.status,
        user: req.body.user
    }

    newslettersModel.findByIdAndUpdate(req.params.id, newsletters, {new:true})
    .then(
        (newslettersUpdate) =>{
            res.send(newslettersUpdate)
        }
    ).catch(
        (error) =>{
            res.status(500).send({
                message: error.message
            })
        }
    )
}
exports.getAll = (req,res)=>{
    newslettersModel.find()
    .populate('user')
    .exec()//se ejectuta la consulta
    .then((newsletters)=>res.send(newsletters))
    .catch(
        (error)=>{
            return res.status(500).send({
                message:error.message
            })
        }
    )
}
/**
 * Metodo para obtener un solo publicación
 */
exports.getOne=(req,res)=>{
    newslettersModel.findById(req.params.id)
    .populate('user')
    .exec()//se ejectuta la consulta
    .then((newsletters)=>res.send(newsletters))
    .catch(
        (error)=>{
            return res.status(500).send({
                message:error.message
            })
        }
    )
}

/**
 * Método para para eliminar un publicación por el id
 * @param {*} req => Todo lo que se recibe
 * @param {*} res => Respuesta que devuelve
 */

exports.deleteOne =(req,res) =>{
    newslettersModel.findByIdAndRemove(req.params.id)
    .then((newsletters) => {res.send(newsletters)})
    .catch((error) => {
        res.status(500).send({message: error.message})
    })
}