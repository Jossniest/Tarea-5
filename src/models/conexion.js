const mysql = require('mysql');
connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'contactos'
});
let conexionModel = {};

conexionModel.getContacs = (callback) => {
    if(connection){
        connection.query('SELECT * FROM contacto',
        (error, filas) => {
            if(error){
                throw error

            }
            else{
                callback(null, filas);
            }
        }
        )
    }
}

conexionModel.insertContacts = (data, callback) => {
    if(connection) {
        connection.query(
            'INSERT INTO contacto set ?', data,
            (error, filas) => {
                if(error){
                    throw error;
                } else{
                    callback(null, filas)
                }
            }
        )
    }
}
module.exports = conexionModel;