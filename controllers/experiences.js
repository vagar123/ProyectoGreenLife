const ExperiencesModel = require('../models/experiences');

/**
 * @param {*} req
 * @param {*} res 
 */

exports.create = (req, res) => {
    /**
     * El signo ! antes de la condicion significa que la estamos negando
     * Validamos que todos los campos del formulario esten llenos
     */


    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        });
    }

    const experiences = new ExperiencesModel({
        name: req.body.name,
        description: req.body.description,
        evidence: req.body.evidence,
        project: req.body.project
    });

    experiences.save()
        .then((dataExperiences) => { res.send(dataExperiences) })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}

exports.update = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        });
    }

    const experiences = {
        name: req.body.name,
        description: req.body.description,
        evidence: req.body.evidence,
        project: req.body.project
    }

    /**
     * findByIdAndUpdate => Metodo de mongoose que permite buscar por id y actualizar un usuario. Tiene los parametros:
     *      -El id del usuario => req.params.id es el id que se envia por la URL
     *      -Los datos nuevos
     */
    ExperiencesModel.findByIdAndUpdate(req.params.id, experiences, {new:true})
        .then(
            (experiencesUpdate) => {
                res.send(experiencesUpdate);
            }
        ).catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                });
            }
        );
}