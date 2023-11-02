import mongoose from 'mongoose';

const ventaSchema = new mongoose.Schema({
    vehiculo: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Vehiculo' 
    },
    cliente: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Cliente' 
    },
    vendedor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Vendedor' 
    },
    pago: Number,
    fechaVenta: Date
  });
  
const Venta = mongoose.model('Venta', ventaSchema);

export default Venta;
  