> **⚠️ LEGACY — Este proyecto fue reemplazado por [CEA-Serverless](https://github.com/revkelo/CEA-Serverless) (AWS Lambda + DynamoDB + API Gateway).**

# CEA Instituto de Movilidad — Frontend Web v1 (Legacy)

**Frontend** del sistema de gestión académica para el **CEA Instituto de Movilidad** (escuela de conducción). Esta es la capa de presentación original, desarrollada con HTML/CSS/JS vanilla y desplegada como WAR sobre Tomcat. El backend correspondiente está en [BackCEA](https://github.com/revkelo/BackCEA).

El backend REST correspondiente a esta versión vive en [BackCEA](https://github.com/revkelo/BackCEA).

## Stack

- **Frontend:** HTML5, CSS3, JavaScript, Bootstrap
- **Backend:** Java 17, Jakarta Servlet 6.0, Maven (WAR)
- **Bases de datos:** MySQL (MariaDB) · Oracle DB
- **Servidor:** Apache Tomcat

## Módulos

- `index.html` — Página principal / landing
- `login.html` — Autenticación de usuarios
- `admin.html` — Panel de administración
- `consultas.js` — Consultas a la API REST (BackCEA)
- `informe.js` — Generación de informes

## Instalación

```bash
git clone https://github.com/revkelo/CEA.git
cd CEA
mvn clean package
# Desplegar el .war generado en Tomcat
```

Requiere una instancia de MySQL/Oracle activa y el backend [BackCEA](https://github.com/revkelo/BackCEA) corriendo en `localhost:8080`.

## Versión actual

Para la versión activa y en producción del proyecto CEA, ver:
**[CEA-Serverless](https://github.com/revkelo/CEA-Serverless)** — arquitectura serverless en AWS (Lambda · API Gateway · DynamoDB · S3).
