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

/* routerMediciones.post('/:dispositivoId', function(req, res) {
    const { dispositivoId } = req.params;
    const { valor } = humedadaleatoria;
    const fecha = new Date(); // Fecha actual

    // Insertar la medición en Tabla Mediciones
    pool.query(
        'INSERT INTO Mediciones (medicionId, fecha, valor, dispositivoId) VALUES (?, ?, ?, ?)',
        [medicionId, fecha, valor, dispositivoId],
        (err, result) => {
            if (err) {
                console.error('Error al registrar la acción:', err);
                return res.status(500).send({ message: 'Error al registrar la medición de humedad' });
            }
            res.status(200).send({ message: 'Medición de humedad registrada correctamente', id: result.insertId });
        }
    );
}); */

module.exports = routerMediciones