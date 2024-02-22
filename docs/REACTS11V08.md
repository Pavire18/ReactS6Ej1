# VIDEO 08 - React.intl

En este vídeo hemos visto cómo instalar y usar la librería react-intl. React Intl es una librería de internacionalización para React que permite la internacionalización de aplicaciones React. La librería proporciona componentes React para formatear y mostrar mensajes en diferentes idiomas, y también ofrece una API para manejar pluralización, formatos de fecha y hora, números y moneda.

Para instalar react-intl debemos hacer uso de npm como siempre:

```jsx
npm install react-intl
```

Tras esto debemos importar IntlProvider y envolver toda nuestra aplicación con él:

 

```jsx
<IntlProvider locale={locale} messages={messages}>
  <App />
</IntlProvider>
```

Como puedes observar debe recibir un parámetro locale que indique el país en el que estamos y otro messages con los textos a pintar, en nuestro caso lo hemos generado mirando el navigator.language e importando los mensajes de diferentes JSON:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IntlProvider } from 'react-intl';
import Spanish from './lang/es.json';
import French from './lang/fr.json';
import English from './lang/en.json';

const locale = navigator.language;
let messages = Spanish;
switch (locale) {
  case 'fr-FR':
    messages = French;
    break;
  case 'en-EN':
    messages = English;
    break;
  case 'es-ES':
    messages = Spanish;
    break;
  default:
    messages = English
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider locale={locale} messages={messages}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

Puedes ver un ejemplo de JSON aquí, con el es.json:

```jsx
{
    "hello": "Hola!",
    "register_form:required_field": "Este campo es obligatorio",
    "register_form:required_field_3_chars": "Este campo es obligatorio y debe tener al menos 3 caracteres",
    "register_form:first_name": "Nombre",
    "register_form:last_name": "Apellido"
}
```

Para traducir un mensaje usaremos el componente FormattedMessage de react-intl:

```jsx
<FormattedMessage id='register_form:required_field' />
```

O la función formatMessage del hook useIntl:

```jsx
const { formatMessage } = useIntl();

// Prueba de mensaje traducido en Javascript
console.log(formatMessage({ id: 'hello' }));
```

