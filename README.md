# Porfolio Sergio Orgaz

![Astro](https://img.shields.io/badge/Astro-5.11.0-dd0031?style=for-the-badge&logo=astro)&nbsp;![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06b6d4?style=for-the-badge&logo=tailwind-css)&nbsp;![Vercel](https://img.shields.io/badge/Vercel-Hosting-000000?style=for-the-badge&logo=vercel)

> **Porfolio Sergio Orgaz** es mi portafolio personal en el que incluyo todos mis datos de interés en lo relativo al sector dev: proyectos, experiencia, habilidades y contacto.

---

## 📱 Descripción del Proyecto
Este portafolio está construido con Astro 5.11.0 y estilizado con Tailwind CSS 3.4.17 para ofrecer una experiencia rápida, ligera y accesible. Cuenta con:

- Componentes modulares desarrollados en Astro y JSX.
- Rutas estáticas generadas en tiempo de compilación para velocidad óptima.
- Integración con formulario de contacto a través de servicios externos.
- Despliegue automático en Vercel tras cada push a la rama main.

El código se organiza en carpetas de componentes, páginas y estilos, manteniendo una estructura limpia y escalable.

---

## 🏗️ Estructura del Proyecto

```txt
Porfolio_Sorgazb/
├── public/                  # Activos estáticos (imágenes, favicon)
├── src/
│   ├── components/          # Componentes reutilizables Astro/JSX
│   ├── layouts/             # Layouts globales y de páginas
│   ├── pages/               # Páginas estáticas generadas
│   ├── styles/              # Estilos globales y configuración Tailwind
│   └── data/                # Contenido estático (md,json)
├── astro.config.mjs         # Configuración de Astro
├── tailwind.config.cjs      # Configuración de Tailwind CSS
├── package.json             # Dependencias y scripts NPM
├── tsconfig.json            # Configuración de TypeScript
├── vercel.json              # Ajustes de despliegue en Vercel
└── README.md                # Documentación del proyecto
```

## ⚙️ Instalación y Entorno de Desarrollo
Clonar repositorio:
```txt
git clone https://github.com/sorgazb/Porfolio_Sorgazb.git
cd Porfolio_Sorgazb
```
Instalar dependencias:
```txt
npm install
```
Levantar en desarrollo
```txt
npm run start
```
Abre http://localhost:4321 en tu navegador para ver la aplicación.

## 🚀 Despliegue
Este proyecto está configurado para desplegarse automáticamente en Vercel:
Simplemente conecta el repositorio a Vercel y cada push a la rama main disparará un nuevo despliegue.
