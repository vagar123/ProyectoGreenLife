const donationModel = require('../models/donation')

exports.create = (req, res) => {

    if(Object.entries(req.body).length==0){
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        })
    }

    const donation = new donationModel({
        entity: req.body.entity,
        project: req.body.project,
        user: req.body.user,
        description: req.body.description,
        value: req.body.value,
        paymentSupport: req.body.paymentSupport,
    })

    donation.save()
    .then((dataDonation) => { res.send(dataDonation) })
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

    const donation = {
        entity: req.body.entity,
        project: req.body.project,
        user: req.body.user,
        description: req.body.description,
        value: req.body.value,
        paymentSupport: req.body.paymentSupport,  
    }

    donationModel.findByIdAndUpdate(req.params.id, donation, {new:true})
    .then(
        (donationUpdate) =>{
            res.send(donationUpdate)
        }
    ).catch(
        (error) =>{
            res.status(500).send({
                message: error.message
            })
        }
    )
}

exports.getAll = (req, res) =>{
    let Donationentity = new RegExp(`.*${req.query.searchBy || ''}.*`)
    donationModel.find({entity: Donationentity})
    .populate('project').populate('user')
    .exec()
    .then((donations)=> res.send(donations))
    .catch(
        (error) =>{
            res.status(500).send({
                message: error.message
            })
        }
    )
}

exports.getOne = (req, res) =>{
    donationModel.findById(req.params.id)
    .populate('project').populate('user')
    .exec()
    .then((donation)=>{res.send(donation)})
    .catch(
        (error) =>{
            res.status(500).send({
                message: error.message
            })
        }
    )
}

exports.deleteOne = (req, res) =>{
    donationModel.findByIdAndRemove(req.params.id)
    .then((donation)=>{res.send(donation)})
    .catch(
        (error) =>{
            res.status(500).send({
                message: error.message
            })
        }
    )
}