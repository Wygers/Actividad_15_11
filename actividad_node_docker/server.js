const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT = 3000;

// Conexión DB
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect(err => {
  if (err) {
    console.error("❌ Error conectando a la base de datos:", err);
  } else {
    console.log("🚀 Conexión a la base de datos exitosa");
  }
});

// Página principal
app.get("/", (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html lang="es">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>App Node.js Dockerizada</title>

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

      <style>
        body {
          background: linear-gradient(135deg, #0d6efd, #6610f2);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-family: 'Segoe UI', sans-serif;
        }
        .card-custom {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          border-radius: 25px;
          padding: 40px;
          max-width: 600px;
          box-shadow: 0 0 25px rgba(255,255,255,0.25);
          border: 1px solid rgba(255,255,255,0.2);
        }
        .creator {
          color: #ffe066;
          font-weight: bold;
          font-size: 1.2rem;
        }
      </style>
  </head>

  <body>
    <div class="container text-center">
      <div class="card-custom">

        <h1 class="title">Aplicación Node.js Dockerizada 🚀</h1>

        <p class="creator">Creada por: <strong>VICENTE BRAVO</strong></p>

        <div class="alert alert-success fw-bold mt-3">
          Conexión a la Base de Datos establecida ✔️
        </div>

        <ul class="list-group text-dark text-start mt-3">
          <li class="list-group-item">⚙️ Servidor Node.js + Express</li>
          <li class="list-group-item">🗄️ Base de Datos MariaDB</li>
          <li class="list-group-item">✔ Healthcheck y Depends_on</li>
          <li class="list-group-item">🔐 Variables de entorno</li>
          <li class="list-group-item">🚀 Carpetas y contenedores preparados</li>
        </ul>

        <footer class="mt-4 text-white-50">
          © ${new Date().getFullYear()} — Proyecto desarrollado por Vicente Bravo
        </footer>
      </div>
    </div>
  </body>
  </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`🔥 Servidor corriendo en http://localhost:${PORT}`);
});
