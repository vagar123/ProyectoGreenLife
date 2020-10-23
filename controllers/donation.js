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
        donor: req.body.donor,
        description: req.body.description,value: req.body.value,paymentSupport: req.body.paymentSupport
    })

    donation.save()
    .then((dataDonation) => { res.send(dataDonation) })
    .catch((error) => {
        res.status(500).send({
            message: error.message
        })
    })
}