
Estas son las instrucciones claras para ejecutar este proyecto tanto usando Expo (flujo recomendado/administrado) como con React Native CLI (flujo "bare/native"). Los comandos están pensados para ejecutarse desde la terminal Bash en Windows (por ejemplo, `bash.exe`).

### Prerrequisitos

- Node.js (v14+)
- npm o yarn
- Git
- Para Expo: no es obligatorio instalar herramientas nativas, solo la app Expo Go en tu móvil (opcional)
- Para React Native CLI (si eliges el flujo nativo): Android Studio + SDK (Windows), Java JDK, y (en macOS) Xcode para iOS

---

Opción A — Usar Expo (recomendado)

1. Clona el repositorio y entra en la carpeta del proyecto:

```bash
git clone <URL_DEL_REPOSITORIO>
cd DesApp
```

2. Instalar dependencias:

```bash
npm install
```

3. Iniciar Expo:

```bash
npx expo start
```

4. Abrir la app en un dispositivo o emulador:

- En la terminal del servidor Expo:
   - Presiona `a` para abrir en un emulador Android (si está configurado)
   - Presiona `i` para abrir en un simulador iOS (macOS solamente)
   - Presiona `w` para abrir en el navegador (web)
- Alternativamente, abre la app Expo Go en tu teléfono y escanea el código QR que aparece en la terminal/ventana del navegador.

---

Opción B — Usar React Native CLI (flujo nativo)


1. Asegura la instalación de Android Studio (Windows) y la configuración de variables de entorno (ANDROID_HOME, PATH hacia platform-tools).

2. Instala dependencias del proyecto:

```bash
npm install
```

3. Ejecuta en Android (desde la raíz del proyecto):

```bash
npx react-native run-android
```

4. Ejecuta en iOS (solo en macOS con Xcode):

```bash
npx react-native run-ios
```

Aviso: las bibliotecas específicas de Expo (como `expo-sqlite`) pueden no funcionar de forma inmediata en un proyecto creado con React Native CLI sin instalar dependencias nativas equivalentes o configurar el cliente de desarrollo de Expo.

---


Comprobación rápida

1. Ejecuta `npm install`.
2. Ejecuta `npx expo start`.
3. Desde la terminal pulsa `a` (Android) o escanea el QR con Expo Go.

Con Expo deberías tener la app funcionando en menos de 5 minutos si tienes las herramientas básicas instaladas.

## Estructura del Proyecto

\`\`\`
tp2-crud/
├── components/
│    └── MovieCard.js            # Componente de tarjeta de película
├── database/
│   └── db.js                   # Funciones de base de datos SQLite
├── screens/
│   ├── AddEditScreen.js        # Pantalla de formulario
│   └── HomeScreen.js           # Pantalla principal con lista
├── App.js                      # Configuración de navegación principal
├── package.json                # Dependencias del proyecto
├── app.json                    # Configuración de Expo
├── README.md                   # Este archivo
\`\`\`

## Tecnologías Utilizadas

- **React Native**: Framework para desarrollo móvil
- **Expo**: Plataforma para desarrollo rápido
- **expo-sqlite**: Base de datos SQLite local
- **React Navigation**: Navegación entre pantallas

## Operaciones CRUD

### Create (Crear)
1. Presiona el botón flotante (+) en la pantalla principal
2. Completa el formulario con los datos de la película
3. Presiona "Guardar"

### Read (Leer)
- La pantalla principal muestra automáticamente todas las películas guardadas
- Los datos se cargan desde SQLite al abrir la app

### Update (Actualizar)
1. Presiona el botón "Editar" en cualquier tarjeta de película
2. Modifica los campos deseados
3. Presiona "Actualizar"

### Delete (Eliminar)
1. Presiona el botón "Eliminar" en cualquier tarjeta de película
2. Confirma la eliminación en el diálogo
3. La película se eliminará permanentemente

