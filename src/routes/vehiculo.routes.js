import express from 'express';
import {
  crearVehiculo,
  obtenerVehiculos,
  obtenerVehiculoPorId,
  actualizarVehiculo,
  eliminarVehiculo,
} from '../controllers/vehiculo.controller.js';


const router = express.Router();


router.post('/vehiculos', crearVehiculo);
router.get('/vehiculos', obtenerVehiculos);
router.get('/vehiculos/:id', obtenerVehiculoPorId);
router.put('/vehiculos/:id', actualizarVehiculo);
router.delete('/vehiculos/:id', eliminarVehiculo);


export default router;
