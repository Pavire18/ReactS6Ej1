# Video 04 - Indentación y comillas en JSX

En este vídeo hemos visto como ESLint no estaba revisando ni la indentación ni las comillas del código que estaba dentro de nuestro JSX.

Para hacer que utilice comillas simples y también indeatción de dos espacios hemos añadido estas reglas a nuestro .eslintrc.js:

```jsx
'react/jsx-indent': [2, 2],
'jsx-quotes': [2, 'prefer-single']
```

Además hemos visto que por defecto nuestro Linter nos pide que revisemos que todas las props existen, esto es bastante incómodo por lo que hemos deshabilitado esa regla:

```jsx
'react/prop-types': 'off',
```

Finalmente nuestro fichero .estlntrc.js ha quedado así:

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
    'space-before-function-paren': 'off',
    'react/jsx-indent': [2, 2],
    'react/prop-types': 'off',
    'jsx-quotes': [2, 'prefer-single']
  }
}
```

