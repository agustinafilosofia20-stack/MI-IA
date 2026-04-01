const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// memoria simple
let historial = [];

app.post("/chat", (req, res) => {
  const mensaje = req.body.mensaje || req.body.prompt;

  if (!mensaje) {
    return res.json({ respuesta: "No entendí 😅" });
  }

  historial.push({ usuario: mensaje });

  let respuesta = "";

  const msg = mensaje.toLowerCase();

  if (msg.includes("hola")) {
    respuesta = "Hola 😊 ¿cómo estás?";
  } 
  else if (msg.includes("nombre")) {
    respuesta = "Soy una IA simulada creada por Agustina 💻✨";
  } 
  else if (msg.includes("como estas")) {
    respuesta = "Estoy genial 😄 ¿y vos?";
  } 
  else if (msg.includes("que haces")) {
    respuesta = "Estoy acá charlando con vos 🤖";
  } 
  else if (msg.includes("chau")) {
    respuesta = "Nos vemos 👋";
  } 
  else {
    respuesta = "Mmm interesante 🤔 contame más...";
  }

  historial.push({ ia: respuesta });

  res.json({ respuesta });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor PRO en http://localhost:${PORT}`);
});