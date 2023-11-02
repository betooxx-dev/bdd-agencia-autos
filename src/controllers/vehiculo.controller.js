import Vehiculo from "../models/vehiculo.model.js";

export const crearVehiculo = async (req, res) => {
  try {
    const { modelo, año, color, precio, estado } = req.body;
    const nuevoVehiculo = new Vehiculo({
      modelo,
      año,
      color,
      precio,
      estado,
    });

    const vehiculoCreado = await nuevoVehiculo.save();

    res.status(201).json(vehiculoCreado);
  } catch (error) {
    res.status(500).json({ message: "Error al agregar vehículo" });
  }
};

export const obtenerVehiculos = async (req, res) => {
  try {
    const vehiculos = await Vehiculo.find();
    res.json(vehiculos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al obtener vehículos" });
  }
};

export const obtenerVehiculoPorId = async (req, res) => {
  try {
    const vehiculo = await Vehiculo.findById(req.params.id);
    if (!vehiculo) {
      return res.status(404).json({ message: "Vehículo no encontrado" });
    }
    res.json(vehiculo);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el vehículo" });
  }
};

export const actualizarVehiculo = async (req, res) => {
  const { modelo, año, color, precio, estado } = req.body;
  try {
    const vehiculoActualizado = await Vehiculo.findByIdAndUpdate(
      req.params.id,
      {
        modelo,
        año,
        color,
        precio,
        estado,
      },
      { new: true }
    );
    if (!vehiculoActualizado) {
      return res.status(404).json({ message: "Vehículo no encontrado" });
    }
    res.json(vehiculoActualizado);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el vehículo" });
  }
};

export const eliminarVehiculo = async (req, res) => {
  try {
    const vehiculoEliminado = await Vehiculo.findByIdAndDelete(req.params.id);
    if (!vehiculoEliminado) {
      return res.status(404).json({ message: "Vehículo no encontrado" });
    }
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al eliminar el vehículo" });
  }
};
