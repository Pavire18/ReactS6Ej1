# VIDEO 09 - Selector de idioma sencillo

En este vídeo hemos creado un selector de idioma muy sencillo, haciendo uso de 3 botones que cambian un estado, el cual almacena los mensajes a mostrar.

Para poder hacer uso de estados nos hemos llevado el IntlProvider al componente App.js:

```jsx
import './App.scss';
import RegisterForm from './components/RegisterForm/RegisterForm';
import React from 'react';
import { IntlProvider } from 'react-intl';
import Spanish from './lang/es.json';
import French from './lang/fr.json';
import English from './lang/en.json';

const locale = navigator.language;
let defaultMessages = Spanish;
switch (locale) {
  case 'fr-FR':
    defaultMessages = French;
    break;
  case 'en-EN':
    defaultMessages = English;
    break;
  case 'es-ES':
    defaultMessages = Spanish;
    break;
  default:
    defaultMessages = English;
}

function App() {
  const [messages, setMessages] = React.useState(defaultMessages);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className='App'>
        <RegisterForm></RegisterForm>
      </div>

      <h2>Selector de idioma</h2>
      <button onClick={() => setMessages(Spanish)}>Spanish</button>
      <button onClick={() => setMessages(English)}>English</button>
      <button onClick={() => setMessages(French)}>French</button>
    </IntlProvider>
  );
}

export default App;
```

Recuerda que el código que hemos visto durante los vídeos puedes encontrarlo en el siguiente repositorio:

<https://github.com/The-Valley-School/react-s11-linter-react-hook-forms>

