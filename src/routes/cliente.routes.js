import express from "express";
import {
  crearCliente,
  obtenerClientes,
  obtenerClientePorId,
  actualizarCliente,
  eliminarCliente,
} from "../controllers/cliente.controller.js";

const router = express.Router();

router.post("/clientes", crearCliente); 
router.get("/clientes", obtenerClientes); 
router.get("/clientes/:id", obtenerClientePorId); 
router.put("/clientes/:id", actualizarCliente);  
router.delete("/clientes/:id", eliminarCliente); 

export default router;
