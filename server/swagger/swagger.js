const path = require("path");
const fs = require("fs");
const swaggerUi = require("swagger-ui-express");


const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname,"swagger.json"),"utf-8"));
// const swaggerPath = path.join(__dirname, "swagger.json");
// const swaggerDocument = JSON.parse(fs.readFileSync(swaggerPath, "utf8"));

module.exports = function setupSwagger(app){
  app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocument));
  console.log("swagger url:http://localhost:9090/api-docs");
}