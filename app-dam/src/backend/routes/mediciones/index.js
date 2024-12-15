const express = require('express')

const routerMediciones = express.Router()

var pool = require('../../mysql-connector');

// Router para las consultas al backend de la tabla MEDICIONES
routerMediciones.get('/', function(req, res) {
    pool.query('Select * from Mediciones', function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

routerMediciones.get('/:dispositivoId', function(req, res) {
    const dispositivoId = req.params.dispositivoId;
    pool.query('SELECT * FROM Mediciones WHERE dispositivoId = ?', [dispositivoId], function(err, result) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        if (result.length === 0) {
            res.status(404).send({ message: 'Dispositivo no encontrado' });
            return;
        }
        res.send(result); //Enviar todos los resultados
    });
});



module.exports = routerMediciones