# Perfil3_CamilaRugamas

Aplicación móvil desarrollada con React Native y Expo para el Módulo 5

## Datos del estudiante

- **Nombre:** Camila Rugamas
- **Carnet:** 20230248

## Enlaces

- **Video demostrativo:** https://enlace-al-video-publico
- **Descargar APK:** https://enlace-de-descarga-del-apk

## Descripción

La aplicación consta de dos pantallas:

1. **Información del estudiante:** nombre, carnet, sección y grupo, con un botón para navegar a la segunda pantalla.
2. **Personajes:** listado de personajes consumido desde `https://rickandmortyapi.com/api/character`.


```
npm install
npx expo install --fix
npx expo start
```

## Generar el APK

```
npm install -g eas-cli
eas login
eas build -p android --profile preview
```
