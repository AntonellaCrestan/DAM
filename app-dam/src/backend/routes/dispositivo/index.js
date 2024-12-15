const express = require('express')

const routerDispositivo = express.Router()

var pool = require('../../mysql-connector');

// Router para las consultas al backend de la tabla DISPOSITIVO
routerDispositivo.get('/', function(req, res) {
    pool.query('Select * from Dispositivos', function(err, result, fields) {
        if (err) {
            res.send(err).status(400);
            return;
        }
        res.send(result);
    });
})

routerDispositivo.get('/:dispositivoId', function(req, res) {
    const dispositivoId = req.params.dispositivoId;
    pool.query('SELECT * FROM Dispositivos WHERE dispositivoId = ?', [dispositivoId], function(err, result) {
        if (err) {
            res.status(400).send(err);
            return;
        }
        if (result.length === 0) {
            res.status(404).send({ message: 'Dispositivo no encontrado' });
            return;
        }
        res.send(result[0]); // Enviar el primer resultado como objeto
    });
});

module.exports = routerDispositivo