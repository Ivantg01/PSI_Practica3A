# PSI_Practica3A
Practica asignatura arquitectura y Programación de Sistemas en Internet Práctica 3 - Grupo A

## Introduction
Ejemplo de API REST para almacenar datos de discos musicales en una base de datos MongoDB.
<P>El modelo de datos de un disco musical es el siguiente:
```{
  name: String,
  author: String,
  format: String,
  matrix: String,
  country: String,
  art: String,
}```

## Endpoints
#### GET
* ``` /discs/``` Obtener todos los discos musicales existentes en la base de datos
* ```/discs/:id``` Obtener un disco musical concreto por su id
* ```/discs/name/:name``` Obtener listado de discos musicales por nombre
* ```/discs/format/:format``` Obtener listado de discos musicales por formato
* ```/discs/country/:country``` Obtener listado de discos musicales por pais de impresión

#### POST
* ```/discs/``` Crear un nuevo disco musical (matrix es opcional)

#### PUT
* ```/discs/:id``` Actualizar un disco musical por su id

#### DELETE
* ```/discs/:id``` Eliminar un disco musical por su id

## Variables de entorno
Se incluye un fichero .env con las variables de entorno necesarias:
* ```DB_URI``` URI de la base de datos MongoDB
