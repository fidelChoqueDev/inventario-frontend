![Nombre del proyecto con un fondo de cajas](./src/assets/Zaiko.png)

## Índice

- [Índice](#índice)
- [Sobre el proyecto](#sobre-el-proyecto)
- [Características principales](#características-principales)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Instalación y uso](#instalación-y-uso)
- [Contribución](#contribución)

## Sobre el proyecto

Zakio es una herramienta integral diseñada para ayudar a las empresas a manejar sus inventarios de manera eficiente y efectiva. Esta aplicación permite a los usuarios realizar un seguimiento de sus productos. Ideal para pequeñas y medianas empresas, la aplicación ofrece una interfaz intuitiva y funcionalidades robustas que facilitan el control y la optimización del inventario.

## Características principales

- Gestión de productos: Permite añadir, editar y eliminar productos del inventario.
- Control de stock: Muestra un estado cuando un producto se esta quedando sin stock.
- Categorías y etiquetas: Organiza los productos por categarías y etiquetas.

## Tecnologías utilizadas

- Backend: Python, FastAPI
- Frontend: React, TypeScript
- Base de Datos: PostgreSQL
- Dependencias: husky, commit-lint, react-router

## Instalación y uso

Para clonar y ejecutar localmente ejecutar los siguientes pasos:

  1. Clonar el repositorio
  ```bash
  git clone https://github.com/Deva-Coders/inventario-frontend.git
  cd inventorio-frontend
  ```

  2. Instalar las dependencias
   ```bash
   pnpm run dev
   ```
  
  3. Desplegar el proyecto localmente
   ```bash
   pnpm run dev
   ```
   4. Accede a la aplicación a través del puerto http://localhost:5173/

## Contribución

Las contribuciones son bienvenidas. Por favor, sigue estos pasos para contribuir:

- Haz un fork del proyecto.
- Crea una rama para tu nueva función (git checkout -b feature/nueva-funcion).
- Haz commit de tus cambios (git commit -am 'Añadir nueva función').
- Recuerda que usamos husky para asegurar el formateo del código y commit-lint para aseguar el uso de conventional commits.
- Haz push a la rama (git push origin feature/nueva-funcion).
- Crea un Pull Request.
