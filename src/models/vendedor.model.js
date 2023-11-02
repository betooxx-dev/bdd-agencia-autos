import mongoose from "mongoose";

const vendedorSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  ventas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Venta",
    },
  ],
});

const Vendedor = mongoose.model("Vendedor", vendedorSchema);

export default Vendedor;
