const contacts = require('../models/conexion');

module.exports = (app) =>{
    app.get('/', (request, response) => {
        contacts.getContacs((error, data) => {
            response.status(200).json(data);
        });
    });

    app.post('/',(request, response)=>{
        
        const contactodata = {
            id:null,
            nombre: request.body.nombre,
            apellido: request.body.apellido,
            telefono: request.body.telefono
        }
        contacts.insertContacts(contactodata, (e, data) => {
            if(data){
                response.json({
                    success: true,
                    msg: 'usuario insertado',
                    data:data
                })
            } else{
                response.status(500).json({
                    success: false,
                    msg: 'error'
                })
            }
        })
    })
}

