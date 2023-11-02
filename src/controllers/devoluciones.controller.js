import Devolucion from "../models/devolucion.model.js";

export const crearDevolucion = async (req, res) => {
  try {
    const { vendedor, venta, autoDevuelto, fechaDevolucion, motivo } = req.body;
    const nuevaDevolucion = new Devolucion({
      vendedor,
      venta,
      autoDevuelto,
      fechaDevolucion,
      motivo,
    });
    const devolucionCreada = await nuevaDevolucion.save();
    res.status(201).json(devolucionCreada);
  } catch (error) {
    res.status(500).json({ message: "Error al agregar devolución" });
  }
};

export const obtenerDevoluciones = async (req, res) => {
  try {
    const devoluciones = await Devolucion.find();
    res.json(devoluciones);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener devoluciones" });
  }
};

export const obtenerDevolucionPorId = async (req, res) => {
  try {
    const devolucion = await Devolucion.findById(req.params.id);
    if (!devolucion) {
      return res.status(404).json({ message: "Devolución no encontrada" });
    }
    res.json(devolucion);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la devolución" });
  }
};

export const actualizarDevolucion = async (req, res) => {
  const { vendedor, venta, autoDevuelto, fechaDevolucion, motivo } = req.body;
  try {
    const devolucionActualizada = await Devolucion.findByIdAndUpdate(
      req.params.id,
      {
        vendedor,
        venta,
        autoDevuelto,
        fechaDevolucion,
        motivo,
      },
      { new: true }
    );
    if (!devolucionActualizada) {
      return res.status(404).json({ message: "Devolución no encontrada" });
    }
    res.json(devolucionActualizada);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la devolución" });
  }
};

export const eliminarDevolucion = async (req, res) => {
  try {
    const devolucionEliminada = await Devolucion.findByIdAndDelete(
      req.params.id
    );
    if (!devolucionEliminada) {
      return res.status(404).json({ message: "Devolución no encontrada" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la devolución" });
  }
};
