import express from 'express';
import {
  crearVendedor,
  obtenerVendedores,
  obtenerVendedorPorId,
  actualizarVendedor,
  eliminarVendedor,
} from '../controllers/vendedor.controller.js';

const router = express.Router();

router.post('/vendedores', crearVendedor);
router.get('/vendedores', obtenerVendedores);
router.get('/vendedores/:id', obtenerVendedorPorId);
router.put('/vendedores/:id', actualizarVendedor);
router.delete('/vendedores/:id', eliminarVendedor);

export default router;
