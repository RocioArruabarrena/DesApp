# TP2 - Aplicación CRUD con SQLite

Aplicación móvil desarrollada con React Native y Expo que implementa un sistema CRUD completo para gestionar una colección de películas utilizando SQLite como base de datos local.

## 📋 Características

- ✅ **CRUD Completo**: Crear, Leer, Actualizar y Eliminar películas
- ✅ **Base de datos SQLite**: Persistencia local de datos usando `expo-sqlite`
- ✅ **Navegación**: Implementada con React Navigation
- ✅ **Validación de formularios**: Validación de campos obligatorios y formatos
- ✅ **Confirmación de eliminación**: Diálogo de confirmación antes de eliminar
- ✅ **Interfaz moderna**: Diseño limpio y responsive
- ✅ **Persistencia**: Los datos se mantienen al cerrar y reabrir la app

## 🗄️ Estructura de la Base de Datos

La tabla `movies` contiene los siguientes campos:

| Campo    | Tipo    | Descripción                    |
|----------|---------|--------------------------------|
| id       | INTEGER | Clave primaria autoincremental |
| title    | TEXT    | Título de la película          |
| director | TEXT    | Director de la película        |
| year     | INTEGER | Año de estreno                 |
| rating   | REAL    | Calificación (0-10)            |

## 📱 Pantallas

### 1. HomeScreen (Pantalla Principal)
- Muestra la lista de todas las películas guardadas
- Botón flotante (+) para agregar nuevas películas
- Cada tarjeta de película incluye botones para editar y eliminar
- Mensaje cuando no hay películas guardadas

### 2. AddEditScreen (Agregar/Editar)
- Formulario para agregar una nueva película o editar una existente
- Validación de campos obligatorios
- Validación de rangos (año: 1800-2100, rating: 0-10)
- Botones para guardar o cancelar

## 🚀 Instalación y Ejecución

### Prerrequisitos

- Node.js (versión 14 o superior)
- npm o yarn
- Expo CLI
- Expo Go app en tu dispositivo móvil (opcional)

### Pasos de instalación

1. **Clonar el repositorio**
   \`\`\`bash
   git clone <URL_DEL_REPOSITORIO>
   \`\`\`

2. **Instalar dependencias**
   \`\`\`bash
   npm install
   \`\`\`

3. **Iniciar la aplicación**
   \`\`\`bash
   npm start
   \`\`\`
   o
   \`\`\`bash
   npx expo start
   \`\`\`

4. **Ejecutar en dispositivo/emulador**
   - **Android**: Presiona `a` en la terminal o escanea el código QR con Expo Go
   - **iOS**: Presiona `i` en la terminal o escanea el código QR con Expo Go
   - **Web**: Presiona `w` en la terminal

## 📂 Estructura del Proyecto

\`\`\`
tp2-crud-sqlite/
├── App.js                      # Configuración de navegación principal
├── package.json                # Dependencias del proyecto
├── README.md                   # Este archivo
├── database/
│   └── db.js                   # Funciones de base de datos SQLite
├── screens/
│   ├── HomeScreen.js           # Pantalla principal con lista
│   └── AddEditScreen.js        # Pantalla de formulario
└── components/
    └── MovieCard.js            # Componente de tarjeta de película
\`\`\`

## 🛠️ Tecnologías Utilizadas

- **React Native**: Framework para desarrollo móvil
- **Expo**: Plataforma para desarrollo rápido
- **expo-sqlite**: Base de datos SQLite local
- **React Navigation**: Navegación entre pantallas
- **React Native Screens**: Optimización de navegación

## 📝 Operaciones CRUD

### Create (Crear)
1. Presiona el botón flotante (+) en la pantalla principal
2. Completa el formulario con los datos de la película
3. Presiona "Guardar"

### Read (Leer)
- La pantalla principal muestra automáticamente todas las películas guardadas
- Los datos se cargan desde SQLite al abrir la app

### Update (Actualizar)
1. Presiona el botón "✏️ Editar" en cualquier tarjeta de película
2. Modifica los campos deseados
3. Presiona "Actualizar"

### Delete (Eliminar)
1. Presiona el botón "🗑️ Eliminar" en cualquier tarjeta de película
2. Confirma la eliminación en el diálogo
3. La película se eliminará permanentemente

## 👨‍💻 Autor

Trabajo Práctico 2 - Desarrollo de Aplicaciones Móviles

## 📄 Licencia

Este proyecto es de uso académico.
