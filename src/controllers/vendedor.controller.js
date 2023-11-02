import Vendedor from '../models/vendedor.model.js';

export const crearVendedor = async (req, res) => {
  try {
    const { nombre, apellido } = req.body;
    const nuevoVendedor = new Vendedor({
      nombre,
      apellido,
      ventas: []
    });
    const vendedorCreado = await nuevoVendedor.save();
    res.status(201).json(vendedorCreado);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar vendedor' });
  }
};

export const obtenerVendedores = async (req, res) => {
  try {
    const vendedores = await Vendedor.find();
    res.json(vendedores);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener vendedores' });
  }
};

export const obtenerVendedorPorId = async (req, res) => {
  try {
    const vendedor = await Vendedor.findById(req.params.id);
    if (!vendedor) {
      return res.status(404).json({ message: 'Vendedor no encontrado' });
    }
    res.json(vendedor);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el vendedor' });
  }
};

export const actualizarVendedor = async (req, res) => {
  const { nombre, apellido } = req.body;
  try {
    const vendedorActualizado = await Vendedor.findByIdAndUpdate(
      req.params.id,
      {
        nombre,
        apellido,
      },
      { new: true }
    );
    if (!vendedorActualizado) {
      return res.status(404).json({ message: 'Vendedor no encontrado' });
    }
    res.json(vendedorActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el vendedor' });
  }
};

export const eliminarVendedor = async (req, res) => {
  try {
    const vendedorEliminado = await Vendedor.findByIdAndDelete(req.params.id);
    if (!vendedorEliminado) {
      return res.status(404).json({ message: 'Vendedor no encontrado' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el vendedor' });
  }
};
