import mongoose from "mongoose";

const vehiculoSchema = new mongoose.Schema({
  modelo: String,
  año: Number,
  color: String,
  precio: Number,
  estado: String, 
});

const Vehiculo = mongoose.model("Vehiculo", vehiculoSchema);

export default Vehiculo;
