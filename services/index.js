
const jwt = require('jwt-simple')
const moment = require('moment')
const config = require ('../config')
//
const keytoken = config.keytoken

exports.createToken = (dataUser) =>{
    const payload = {
        sub: dataUser._id,
        iat: moment().unix(), //Fecha en la que se creó el token, con unix() se convierte en número
        exp: moment().add('1', 'hour').unix(), // Fecha en la que expira el token
        name: dataUser.name,
        lastName: dataUser.lastName,
        email: dataUser.email,
        city: dataUser.city,
        cellPhone:dataUser.cellPhone,
        userName: dataUser.userName,
        password: dataUser.password,
        role: dataUser.role,
        status: dataUser.status,
        project: dataUser.project,
        
    }
    return jwt.encode(payload,keytoken)
}


exports.decodeToken = (token) => {
    const decode = new Promise((resolve,reject) =>{
    try{
    
        const payload = jwt.decode(token,keytoken)
        // Traducir el token 
        /*Validamos fechas*/
        if (payload.exp <= moment().unix()){
            reject({
                status: 401,
                message: 'El token ha expirado'
            })
        }
        resolve(payload.sub)
    }catch{
        reject({
            status: 500,
            message: 'El token es invalido'
        })}
        
    })
    return decode
}