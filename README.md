# Actividad_15_11
actividad realizada para dockerizar aplicación en node 
🐳 Servicios Docker del Proyecto

El proyecto implementa dos contenedores:

1️⃣ Servidor Web (Node.js)

Encargado de:

Ejecutar Express

Conectarse al servidor DB

Renderizar interfaz HTML con Bootstrap

Exponer el puerto 3000

Incluye:

Healthcheck vía HTTP

Variables de entorno para DB

Dependencias hacia el contenedor DB

2️⃣ Servidor de Base de Datos (MariaDB)

Incluye:

Base de datos llamada nodeappdb

Usuario root con contraseña

Persistencia de datos mediante volumen

Ejecución automática de scripts SQL en /docker-entrypoint-initdb.d

El archivo db_init.sql crea tabla y datos iniciales.

📦 Cómo ejecutar la aplicación
1️⃣ Clonar o colocar el proyecto donde corresponda

Asegúrate de que el archivo docker-compose.yml esté en la raíz del proyecto.

2️⃣ Construir y levantar los contenedores

Ejecuta:

docker-compose up -d --build


Esto hará:

Construir imagen Node.js desde Dockerfile

Descargar imagen mariadb:11

Crear el volumen dbdata

Ejecutar el script init/db_init.sql

Arrancar ambos servicios con healthchecks

3️⃣ Verificar contenedores
docker ps

4️⃣ Abrir la aplicación

En tu navegador:

http://localhost:3000


Deberías ver la interfaz con Bootstrap, mostrando:

Mensaje de bienvenida

Estado de conexión a la BD

Tu nombre: VICENTE BRAVO

Lista de características del proyecto

🧪 Healthchecks incluidos
Servidor Web (Node)
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost:3000"]


Valida que Express esté respondiendo correctamente.

Servidor DB (MariaDB)
healthcheck:
  test: ["CMD", "mysqladmin", "ping", "-h", "localhost"]


Valida que MariaDB esté completamente iniciada antes de permitir que el servidor web arranque.

🔗 Dependencias entre contenedores

El servicio web depende del servicio db:

depends_on:
  db:
    condition: service_healthy


Esto garantiza que:

✔ Node.js solo arranque cuando MariaDB esté lista
✔ Se eviten errores de conexión
✔ El inicio sea ordenado y estable

🗄️ Script de inicialización SQL

En init/db_init.sql:

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100)
);

INSERT INTO usuarios (nombre) VALUES ('Vicente Bravo');


Este script se ejecuta automáticamente al iniciar por primera vez el contenedor DB.

🎨 Interfaz del Proyecto

El archivo server.js contiene una interfaz generada desde Express con:

Bootstrap 5

Tarjeta con glassmorphism

Colores degradados

Nombre del creador: VICENTE BRAVO

Información del entorno Docker

Estado de conexión a la base de datos
