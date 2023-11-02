import express from 'express';
import {
  crearVenta,
  obtenerVentas,
  obtenerVentaPorId,
  actualizarVenta,
  eliminarVenta,
} from '../controllers/venta.controller.js';

const router = express.Router();

router.post('/ventas', crearVenta);
router.get('/ventas', obtenerVentas);
router.get('/ventas/:id', obtenerVentaPorId);
router.put('/ventas/:id', actualizarVenta);
router.delete('/ventas/:id', eliminarVenta);

export default router;
