import express from "express";
import mongoose from "mongoose";

const Animal = mongoose.model(
  "Animal",
  new mongoose.Schema({
    tipo: String,
    estado: String,
  })
);

const app = express();

const username = "joseb";
const password = "password";
const host = "mongo-app";
const port = "27017";
const databaseName = "miapp";

const uri = `mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=admin`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(uri, options)
  .then(() => {
    console.log("Conexión exitosa a MongoDB");
    app.listen(3000, () => console.log("listening..."));
  })
  .catch((error) => {
    console.error("Error de conexión a MongoDB:", error.message);
  });

app.get("/", async (_req, res) => {
  console.log("listando chanchitos...");
  const animales = await Animal.find();
  return res.send(animales);
});
app.get("/crear", async (_req, res) => {
  console.log("creando...");
  await Animal.create({ tipo: "Chanchito", estado: "Feliz" });
  return res.send("ok");
});
