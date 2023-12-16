const express = require("express");
const fs = require("fs");

const app = express();
const puerto = process.env.PORT || 3000;

/* configuro para lea archivos json */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Me permite renderizar archivos css y js
app.use(express.static(__dirname + "/public"));


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/procesar-formulario", (req, res) => {
  if (!req.body) {
    res.status(400).send("Datos del formulario no recibidos");
    return;
  }

  const { nombre,telefono, correo, mensaje } = req.body;

  const nuevoRegistro = {
    nombre: nombre,
    telefono: telefono,
    correo: correo,
    mensaje: mensaje,
  };

  let registros = [];

  try {
    const data = fs.readFileSync("registros.json", "utf-8");
    registros = JSON.parse(data);
    console.log("Guardando...");
  } catch (error) {
    console.error("Error al leer el archivo JSON", error);
  }

  registros.push(nuevoRegistro);

  fs.writeFile("registros.json", JSON.stringify(registros, null, 2), (err) => {
    if (err) {
      console.error("Error al escribir en el archivo JSON:", err);
      res.status(500).send("Error interno del servidor");
    } else {
      console.log("Datos almacenados en registros.json:", nuevoRegistro);
      res.redirect("/");
    }
  });

});

app.listen(puerto, () => {
    console.log(`Servidor Express en ejecución en el puerto ${puerto}`);
});