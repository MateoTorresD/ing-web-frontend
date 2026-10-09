# Project Frontend

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)
![Estado](https://img.shields.io/badge/estado-en%20desarrollo-yellow)

Aplicación web (SPA). Consume la API REST
[`project_api`](https://github.com/MateoTorresD/ing-web-backend).

## Índice

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación y ejecución](#instalación-y-ejecución)
- [Variables de entorno](#variables-de-entorno)
- [Scripts](#scripts)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Autor](#autor)

## Características

- Inicio de sesión con JWT; la sesión se persiste en el navegador.
- Rutas protegidas: sin sesión redirige a `/auth/login`.
- Cierre de sesión automático si la API responde `401`.
- CRUD de usuarios (listado paginado, crear, editar y eliminar) con validación de formularios.

## Tecnologías

- **Core:** React 19, TypeScript, Vite (con React Compiler)
- **Estilos y UI:** Tailwind CSS 4, shadcn/ui (Base UI), lucide-react, Sonner
- **Estado y datos:** TanStack Query, Zustand, Axios
- **Formularios:** React Hook Form + Zod
- **Ruteo:** React Router
- **Lint:** Oxlint

## Requisitos

- Node.js 20.19+ (recomendado 22 LTS) y npm
- [API](https://github.com/MateoTorresD/ing-web-backend) en ejecución

## Instalación y ejecución

```bash
# 1. Clonar e instalar
git clone https://github.com/MateoTorresD/ing-web-frontend.git
cd ing-web-frontend
npm install

# 2. Configurar variables de entorno
cp .env.template .env
# editar .env (ver sección siguiente)

# 3. Levantar en desarrollo
npm run dev
```

La app queda disponible en `http://localhost:5173`.
Este origen debe estar incluido en `CORS_ORIGINS` del back.

## Variables de entorno

| Variable       | Descripción                                  | Ejemplo                     |
| -------------- | -------------------------------------------- | --------------------------- |
| `VITE_API_URL` | URL base de la API, **incluyendo** el `/api` | `http://localhost:3000/api` |

## Scripts

| Comando           | Descripción                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con HMR         |
| `npm run build`   | Chequeo de tipos y build de producción |
| `npm run preview` | Sirve el build localmente              |

## Autor

[Mateo Torres](https://github.com/MateoTorresD)
