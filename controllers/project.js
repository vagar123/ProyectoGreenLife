const ProjectModel = require('../models/project')

//metodo para crear proyecto
exports.create = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        })
    }
    const project = new ProjectModel({
        name: req.body.name,
        theme: req.body.theme,
        description: req.body.description,
        city: req.body.city,
        address: req.body.address,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        limitPeople: req.body.limitPeople,
        totalPeople: req.body.totalPeople
    })
    project.save()
        .then((dataProject) => { res.send(dataProject)})
        .catch((error) =>{
            res.status(500).send({
                message: error.message
            })
        })
}
// metodo para editar proyecto
exports.update = (req,res) =>{
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        })
    }
    
    const project = {
        name: req.body.name,
        theme: req.body.theme,
        description: req.body.description,
        city: req.body.city,
        address: req.body.address,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        limitPeople: req.body.limitPeople,
        totalPeople: req.body.totalPeople
    }

    ProjectModel.findByIdAndUpdate(req.params.id, project, {new:true})
    .then((projectUpdate) => {res.send(projectUpdate)})
    .catch((error) =>{
        res.status(500).send({
            message: error.message
        })
    })
   
}
// metodo para obtener todos los proyectos
exports.getAll = (req,res) =>{
    ProjectModel.find()
    .then ( (projects) =>{ res.send(projects)})
    .catch ( (error) =>{ res.status(500).send({message: error.message})})
}
// metodo para obtener un projecto
exports.getOne = (req,res) =>{
    ProjectModel.findById(req.params.id)
    .then ( (project) => { res.send(project)})
    .catch ( ( error) =>{ res.status(500).send({ message: error.message})})
}
// metodo para eliminar un proyecto
exports.delete = (req,res) =>{
    ProjectModel.findByIdAndRemove(req.params.id)
    .then( (project) =>{ res.send(project)})
    .catch( (error) =>{ res.status(500).send({ message: error.message})})
}