# Getting Started

> **Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

El archivo .env ya esta configurado con una api key, en caso de no funcionar cambiar el valor de API_KEY

## Step 1: Instalar dependencias

```bash
npm install --legacy-peer-deps
cd ios
bundle install
pod install
```

## Step 2: Arrancar metro server

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Arrancar la aplicación

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```
