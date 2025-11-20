# 🎓 Portal de Información Proyecto de Título UCEN

Aplicación web desarrollada como parte del **Laboratorio de Ingeniería de Software** en la Universidad Central de Chile (UCEN).  
El portal permite consultar **cronogramas, tareas y fechas importantes** de los cursos **Proyecto de Título I y II**.

---

## 🚀 Características Principales

- 🗓️ **Tres modos de vista**: Cronograma general, vista mensual y vista semanal.  
- 🔔 **Recordatorio automático**: muestra una alerta cuando una tarea está a menos de 24 h de su entrega.  
- 👨‍🏫 **Panel del Coordinador**: vista dedicada para administración de procesos.  
- 🌙 **Diseño moderno y responsivo**, creado con React y TailwindCSS.  

---

## 🛠️ Tecnologías Utilizadas

- ⚛️ **React** (Create React App)  
- 🎨 **TailwindCSS**  
- 🧩 **PostCSS / Autoprefixer**  
- 💾 **JSON** como fuente de datos  
- 🔧 **Node.js & npm**  
- ☁️ **Git & GitHub** para control de versiones  

---

## 📂 Estructura del Proyecto
```
portal-ucen/
├── public/                      # Archivos estáticos
├── src/
│   ├── components/              # Componentes (Tabs, Timeline, Header, etc.)
│   ├── data/                    # Archivos JSON (tareas PT1/PT2, semanas, etc.)
│   ├── pages/                   # Páginas principales (Dashboard, CoordinatorPage)
│   ├── index.js                 # Punto de entrada de la aplicación
│   └── index.css                # Estilos base con Tailwind
├── package.json
├── tailwind.config.js
└── README.md
```

---

## ▶️ Ejecución Local

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar la aplicación en modo desarrollo
npm start

# 3. Abrir en el navegador
http://localhost:3000

