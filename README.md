# Sistema de Gestión de Concesionaria

Este proyecto es una práctica universitaria para la asignatura de Base de Datos, que implementa un sistema de gestión para una concesionaria de autos utilizando Node.js, Express, y MongoDB con Mongoose como ORM.

## Descripción

El sistema permite gestionar las siguientes entidades:

- Vehículos
- Clientes
- Vendedores
- Ventas
- Devoluciones

Cada entidad tiene su propio modelo, controlador y rutas, siguiendo una estructura MVC (Modelo-Vista-Controlador).

## Requisitos

- Node.js
- MongoDB
- npm (Node Package Manager)

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/betooxx-dev/bdd-agencia-autos
   ```
2. Navega al directorio del proyecto:
   ```
   cd bdd-agencia-autos
   ```
3. Instala las dependencias:
   ```
   npm install
   ```
4. Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:
   ```
   PORT=3000
   MONGODB_URL=tu_url_de_mongodb
   ```

## Uso

1. Inicia el servidor:
   ```
   npm run dev
   ```
2. El servidor se iniciará en `http://localhost:3000` (o el puerto que hayas especificado en el archivo `.env`)

3. Utiliza las siguientes rutas para interactuar con la API:

   - Vehículos: `/api/vehiculos`
   - Clientes: `/api/clientes`
   - Vendedores: `/api/vendedores`
   - Ventas: `/api/ventas`
   - Devoluciones: `/api/devoluciones`

   Cada ruta soporta operaciones CRUD (Crear, Leer, Actualizar, Eliminar) utilizando los métodos HTTP apropiados.

## Estructura del proyecto

```
├── controllers/
│   ├── cliente.controller.js
│   ├── devoluciones.controller.js
│   ├── vehiculo.controller.js
│   ├── vendedor.controller.js
│   └── venta.controller.js
├── models/
│   ├── cliente.model.js
│   ├── devolucion.model.js
│   ├── vehiculo.model.js
│   ├── vendedor.model.js
│   └── venta.model.js
├── routes/
│   ├── cliente.routes.js
│   ├── devolucion.routes.js
│   ├── vehiculo.routes.js
│   ├── vendedor.routes.js
│   └── venta.routes.js
├── app.js
├── db.js
├── index.js
└── .env
```

## Características

- Uso de Mongoose como ORM para MongoDB
- Implementación de operaciones CRUD para cada entidad
- Relaciones entre entidades (por ejemplo, ventas asociadas a clientes y vendedores)
- Manejo de errores y validaciones básicas
- Uso de variables de entorno para configuración
