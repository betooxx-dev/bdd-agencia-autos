import express from "express";
import cors from "cors";
import morgan from "morgan";
import { config } from "dotenv";

import vehiculoRoutes from "./routes/vehiculo.routes.js";
import clienteRoutes from "./routes/cliente.routes.js";
import vendedorRoutes from "./routes/vendedor.routes.js";
import ventaRoutes from "./routes/venta.routes.js";
import devolucionRoutes from "./routes/devolucion.routes.js";

const app = express();

config();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", vehiculoRoutes);
app.use("/api", clienteRoutes);
app.use("/api", vendedorRoutes);
app.use("/api", ventaRoutes);
app.use("/api", devolucionRoutes);

export default app;