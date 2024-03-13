# WebRestaurante
Proyecto personal de practica del stack PERN (Postgres, Express, React, NodeJS), para crear una aplicación web, en este caso un restaurante implementando la arquitectura hexagonal y la inyección de dependencias.
- Coneccion a la BD y CRUD con sequelize
- Documentacion con Swagger
- Tests unitarios con Jest
- Tests de API con Postman y Swagger
Para ejecutar la app:
- Clonar el repo con ```git clone https://github.com/ojrchen09cheno/WebRestaurante.git```
- Instalar las dependencias dentro del proyecto con ```npm i``` o ```yarn``` 
- Crear archivo .env para las variables de entorno y agregar las siguientes:
```
PORT = puertoapp
DB_USER = usuariobd
DB_HOST = hostbd
DB_PASSWORD = contrasenabd
DB_NAME = nombrebd
DB_PORT = puertobd
```
- Ejecutar la app con npm start
- Ejecutar los tests con npm test
