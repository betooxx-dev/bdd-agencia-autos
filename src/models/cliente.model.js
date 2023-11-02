import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  direccion: String,
  historialCompras: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Venta" 
}]
});

const Cliente = mongoose.model("Cliente", clienteSchema);

export default Cliente;
