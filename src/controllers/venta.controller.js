import Venta from "../models/venta.model.js";
import Cliente from "../models/cliente.model.js";
import Vendedor from "../models/vendedor.model.js";

export const crearVenta = async (req, res) => {
  try {
    const { vehiculo, cliente, vendedor, pago, fechaVenta } = req.body;

    const clienteAsociado = await Cliente.findById(cliente);
    const vendedorAsociado = await Vendedor.findById(vendedor);

    if (!clienteAsociado || !vendedorAsociado) {
      return res.status(404).json({ message: 'Verifique los datos del cliente y el vendedor' });
    }

    const nuevaVenta = new Venta({
      vehiculo,
      cliente,
      vendedor,
      pago,
      fechaVenta,
    });
    const ventaCreada = await nuevaVenta.save();

    clienteAsociado.historialCompras.push(ventaCreada._id); 
    await clienteAsociado.save(); 

    vendedorAsociado.ventas.push(ventaCreada._id);
    await vendedorAsociado.save();

    res.status(201).json(ventaCreada);
  } catch (error) {
    res.status(500).json({ message: "Error al agregar venta" });
  }
};

export const obtenerVentas = async (req, res) => {
  try {
    const ventas = await Venta.find();
    res.json(ventas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener ventas" });
  }
};

export const obtenerVentaPorId = async (req, res) => {
  try {
    const venta = await Venta.findById(req.params.id);
    if (!venta) {
      return res.status(404).json({ message: "Venta no encontrada" });
    }
    res.json(venta);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la venta" });
  }
};

export const actualizarVenta = async (req, res) => {
  const { vehiculo, cliente, vendedor, pago, fechaVenta } = req.body;
  try {
    const ventaActualizada = await Venta.findByIdAndUpdate(
      req.params.id,
      {
        vehiculo,
        cliente,
        vendedor,
        pago,
        fechaVenta,
      },
      { new: true }
    );
    if (!ventaActualizada) {
      return res.status(404).json({ message: "Venta no encontrada" });
    }
    res.json(ventaActualizada);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la venta" });
  }
};

export const eliminarVenta = async (req, res) => {
  try {
    const ventaEliminada = await Venta.findByIdAndDelete(req.params.id);
    if (!ventaEliminada) {
      return res.status(404).json({ message: "Venta no encontrada" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la venta" });
  }
};
