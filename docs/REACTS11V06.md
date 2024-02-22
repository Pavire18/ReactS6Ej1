# VIDEO 06 - Intro a React Hook Forms

En este vídeo hemos aprendido a configurar la librería React-hook-forms:

<https://react-hook-form.com/>

La librería React Hook Form es una librería de formularios para React que está diseñada para simplificar la creación de formularios en React.

React Hook Form utiliza los conceptos de los hooks de React para administrar el estado del formulario y las validaciones de los campos de entrada, lo que significa que no necesita crear clases para manejar la lógica del formulario. Además ofrece varias características útiles, como la validación de los campos de entrada del formulario, la gestión del estado de los campos de entrada… y mucho más.

En primer lugar la hemos instalado mediante el comando:

```jsx
npm install react-hook-form
```

Tras esto hemos creado un componente RegisterForm que nos ha servidor para practicar con la librería, el componente ha quedado así:

```jsx
import { useForm } from 'react-hook-form';
import React from 'react';

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = React.useState(null);

  const onSubmit = (data) => setFormData(data);

  return <div className='register-form'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='First name' type='text' {...register('firstName')} />
      <input placeholder='Last name' type='text' {...register('lastName')} />
      <button type='submit'>Aceptar</button>
    </form>

    <h2>Datos del formulario:</h2>
    <p>First name: {formData?.firstName}</p>
    <p>Last name: {formData?.lastName}</p>
  </div>;
};

export default RegisterForm;
```

Lo más importante es el uso de useForm:

```jsx
const { register, handleSubmit } = useForm();
```

Que nos devuelve la función register para registrar campos en nuestro formulario, y la función handleSubmit que manejará el envío del mismo.

