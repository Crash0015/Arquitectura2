const express = require("express");
const swaggerUi = require("swagger-ui-express");
const yaml = require("yamljs");

const app = express();

// Cargar el archivo swagger.yaml
const swaggerDocument = yaml.load("./swagger.yaml");

// Ruta de Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Hola Mundo (GraphQL)
app.get("/", (req, res) => {
  res.send("Hola Mundo con GraphQL y Swagger");
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`Documentación Swagger en http://localhost:${PORT}/api-docs`);
});
