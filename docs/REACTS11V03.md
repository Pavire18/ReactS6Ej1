# VIDEO 03 - Prettier y ESLint

En este vídeo hemos instalado la extensión Prettier de Visual Studio y la hemos marcado como formateador por defecto:

<https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode>

Para indicarle como queremos que nos formatee el código hemos creado un fichero .prettierrc en la raíz de nuestro proyecto, y le hemos personalizado algunas de las reglas:

```javascript
{
    "singleQuote": true,
    "tabWidth": 2,
    "jsxSingleQuote": true
}
```

Todas las reglas disponibles las puedes encontrar en la documentación de Prettier:

<https://prettier.io/docs/en/options.htmlhtml>

Por otro lado, nuestro plugin de ESLint se queja porque no sabe con qué versión de React estamos trabajando, para ello debemos añadir esta propiedad a nuestro .estlintrc.js

```javascript
overrides: [
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    env: {
      jest: true
    }
  }
],
```

También hemos tenido problemas con el espacio después de los paréntesis, ya que ESLInt indica que son obligatorios, pero Prettier no los pone. Como nosotros trabajamos sin ese espacio, vamos a indicarle a ESLint que esa regla no nos interesa:

```jsx
'space-before-function-paren': 'off'
```

Además hemos creado un comando en el package.json para que analice todos los .js dentro de la carpeta SRC y otro para que además de analizar los corrija:

```jsx
"lint": "eslint src",
"lint:fix": "eslint src --fix",
```

Esto ha provocado errores al analizar los ficheros de test, por lo que vamos a indicarle a ESLint que esos ficheros son de test con esa configuración dentro del .eslintrc.js:

```javascript
overrides: [
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    env: {
      jest: true
    }
  }
],
```

Finalmente nuestro .eslintrc.js completo queda de la siguiente manera:

```javascript
module.exports = {
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  overrides: [
    {
      files: ['**/*.test.js', '**/*.spec.js'],
      env: {
        jest: true
      }
    }
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
    'react/react-in-jsx-scope': 'off',
    'space-before-function-paren': 'off'
  }
}
```

