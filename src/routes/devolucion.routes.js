import express from 'express';
import {
  crearDevolucion,
  obtenerDevoluciones,
  obtenerDevolucionPorId,
  actualizarDevolucion,
  eliminarDevolucion,
} from '../controllers/devoluciones.controller.js';


const router = express.Router();


router.post('/devoluciones', crearDevolucion); 
router.get('/devoluciones', obtenerDevoluciones); 
router.get('/devoluciones/:id', obtenerDevolucionPorId); 
router.put('/devoluciones/:id', actualizarDevolucion); 
router.delete('/devoluciones/:id', eliminarDevolucion); 


export default router;
