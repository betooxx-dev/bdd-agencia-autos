import Cliente from '../models/cliente.model.js';

export const crearCliente = async (req, res) => {
  try {
    const { nombre, apellido, direccion } = req.body;
    const nuevoCliente = new Cliente({
      nombre,
      apellido,
      direccion,
      historialCompras: [],
    });
    const clienteCreado = await nuevoCliente.save();
    res.status(201).json(clienteCreado);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar cliente' });
  }
};

export const obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener clientes' });
  }
};

export const obtenerClientePorId = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el cliente' });
  }
};

export const actualizarCliente = async (req, res) => {
  const { nombre, apellido, direccion, historialCompras } = req.body;
  try {
    const clienteActualizado = await Cliente.findByIdAndUpdate(
      req.params.id,
      {
        nombre,
        apellido,
        direccion,
        historialCompras,
      },
      { new: true }
    );
    if (!clienteActualizado) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.json(clienteActualizado);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el cliente' });
  }
};

export const eliminarCliente = async (req, res) => {
  try {
    const clienteEliminado = await Cliente.findByIdAndDelete(req.params.id);
    if (!clienteEliminado) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el cliente' });
  }
};
