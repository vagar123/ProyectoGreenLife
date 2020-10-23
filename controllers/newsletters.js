const newslettersModel = require('../models/newsletters')

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
        state: req.body.state
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
        state: req.body.state
    }

    newslettersModel.findByIdAndUpdate(req.params.id, newsletters)
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