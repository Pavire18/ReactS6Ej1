import './App.scss';
import RegisterForm from './components/RegisterForm/RegisterForm';
import React, { useRef } from 'react';
import { IntlProvider, useIntl } from 'react-intl';
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
  const { formatMessage } = useIntl();
  const selectRef = useRef();

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div className='App'>
        <RegisterForm></RegisterForm>
      </div>

      <h2>{formatMessage({ id: 'app:language_selector' })}</h2>
      {/* <button onClick={() => setMessages(Spanish)}>Spanish</button>
      <button onClick={() => setMessages(English)}>English</button>
      <button onClick={() => setMessages(French)}>French</button> */}

      <select ref={selectRef}>
        <option value={Spanish}>{formatMessage({ id: 'app:spanish' })}</option>
        <option value={English}>{formatMessage({ id: 'app:english' })}</option>
        <option value={French}>{formatMessage({ id: 'app:french' })}</option>
      </select>
      <button onClick={() => setMessages(selectRef.current.value)}>{formatMessage({ id: 'app:change' })}</button>
    </IntlProvider>
  );
}

export default App;
