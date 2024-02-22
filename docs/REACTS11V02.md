# VIDEO 02 - ESLint

ESLint es un linter de código, un linter es una herramienta de programación que analiza el código fuente de un programa en busca de errores de sintaxis, problemas de estilo y otros problemas comunes.

<https://eslint.org/>

Para instalar eslint y crear la config inicial debemos ejecutar en consola:

```jsx
npx eslint --init
```

Para ejecutar el linter vamos a crear un script dentro de nuestro package.json:

```jsx
"lint": "eslint src/App.js",
```

Si queremos que además de revisar el código lo arregle, le añadimos la opción —fix:

```jsx
"lint": "eslint src/App.js --fix",
```

Recordad que para usar un script del package.json debemos ejecutarlo en consola con npm run:

```scss
npm run lint
```

Para que nos de feedback nuestro Visual Studio debemos instalar el plugin ESLint de Microsoft:

<https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>

Para desactivar reglas quer no nos interesen, por ejemplo “semi” o “react/react-in-jsx-scope” pisamos la prop rules de nuestro .eslintrc.js:

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    semi: 'off',
    'react/react-in-jsx-scope': 'off'
  }
}
```
