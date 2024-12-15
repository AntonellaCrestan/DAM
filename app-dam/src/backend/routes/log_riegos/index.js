const express = require('express')

const routerLogRiegos = express.Router()

var pool = require('../../mysql-connector');

// Router para las consultas al backend de la tabla LOG_RIEGOS

routerLogRiegos.post('/:electrovalvulaId', function(req, res) {
    const { electrovalvulaId } = req.params;
    const { apertura } = req.body; // 1 para "abierto", 0 para "cerrado"
    const fecha = new Date(); // Fecha actual

    // Validar que el estado de apertura sea un valor permitido
    if (![0, 1].includes(apertura)) {
        return res.status(400).send({ message: 'El valor de apertura debe ser 1 (abierto) o 0 (cerrado).' });
    }

    // Insertar la acción de apertura/cierre en la tabla Log_Riegos
    pool.query(
        'INSERT INTO Log_Riegos (fecha, apertura, electrovalvulaId) VALUES (?, ?, ?)',
        [fecha, apertura, electrovalvulaId],
        (err, result) => {
            if (err) {
                console.error('Error al registrar la acción:', err);
                return res.status(500).send({ message: 'Error al registrar la acción' });
            }
            res.status(200).send({ message: 'Acción registrada correctamente', id: result.insertId });
        }
    );
});

module.exports = routerLogRiegos;