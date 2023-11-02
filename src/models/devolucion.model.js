import mongoose from "mongoose";

const devolucionSchema = new mongoose.Schema({
  vendedor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vendedor"
  },
  venta: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Venta"
  },
  autoDevuelto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Vehiculo"
  },
  fechaDevolucion: Date,
  motivo: String
});

const Devolucion = mongoose.model("Devolucion", devolucionSchema);

export default Devolucion;
