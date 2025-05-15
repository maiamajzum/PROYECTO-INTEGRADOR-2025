# EVIDENCIA 2

Este proyecto es una aplicación de React que permite visualizar una lista de productos obtenidos desde una API externa (DummyJSON) utilizando axios. La lista de productos se presenta de forma responsiva y filtrable, utilizando Tailwind CSS. Los usuarios pueden buscar productos por nombre y visualizar estadísticas relacionadas con la lista de productos.

**Características:**

-Filtrado de Productos: Permite buscar productos por nombre. Si no se ingresa texto en el campo de búsqueda, se muestran todos los productos.

-Estadísticas de Productos: Muestra estadísticas como:
  Número total de productos
  Producto con el precio más alto
  Producto con el precio más bajo
  Cantidad de productos con títulos largos (más de 20 caracteres)
  Precio total de todos los productos filtrados
  Descuento promedio de los productos

-Interactividad: La sección de estadísticas se puede mostrar u ocultar con un botón.

## Requisitos previos

Antes de ejecutar el proyecto, debes asegurarte de tener instaladas las siguientes herramientas en tu PC:

- [Node.js](https://nodejs.org/) (version 14 o superior)
- [npm](https://www.npmjs.com/) (viene con Node.js)

## Pasos para ejecutar el proyecto

1. **Clonar el repositorio:**

   Clona el proyecto en tu máquina, desde Git Bash usando el siguiente comando:

   git clone https://github.com/maiamajzum/PROYECTO-INTEGRADOR-2025/tree/main/EVIDENCIA%201

2. **Instalar las dependencias:**

Accede al directorio del proyecto y ejecuta el siguiente comando para instalar todas las dependencias necesarias:

cd tu-repositorio
npm install

3. **Ejecutar el proyecto:**

Para iniciar la aplicación en tu entorno local, ejecuta el siguiente comando:

npm run dev

Esto abrirá la aplicación en el navegador en http://localhost:5173.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
├──/src
|   ├──/App.css      Estilos de la aplicación
|   ├──/App.jsx      Componente principal de React
|   ├──/index.jsx    Punto de entrada de la aplicación
├──/package.json     Archivo de configuración de dependencias
└──/vite.config.js   Configuración de Vite
```     
## Captura de pantalla

![image](https://github.com/user-attachments/assets/ffa4c139-6313-44f7-9f85-faa97cfbefe8)

