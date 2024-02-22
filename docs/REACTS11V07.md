# VIDEO 07 - Validaciones con React Hook Forms

En este vídeo hemos añadido algunas validaciones a nuestro RegisterForm, como campos obligatorios o campos con longitud mínima:

```jsx
import { useForm } from 'react-hook-form';
import React from 'react';
import './RegisterForm.scss';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const [formData, setFormData] = React.useState(null);

  const onSubmit = (data) => setFormData(data);

  return (
    <div className='register-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className='register-form__fieldset'>
          <input placeholder='First name' type='text' {...register('firstName', { required: true })} />
          {errors?.firstName && <p className='register-form__error'>Este campo es obligatorio</p>}
        </fieldset>
        <fieldset className='register-form__fieldset'>
          <input placeholder='Last name' type='text' {...register('lastName', { required: true, minLength: 3 })} />
          {errors?.lastName && <p className='register-form__error'>Este campo es obligatorio y debe tener al menos 3 caracteres</p>}
        </fieldset>
        <button type='submit'>Aceptar</button>
      </form>

      <h2>Datos del formulario:</h2>
      <p>First name: {formData?.firstName}</p>
      <p>Last name: {formData?.lastName}</p>

      <h2>Datos del formulario en "caliente":</h2>
      <p>First name: {watch('firstName')}</p>
      <p>Last name: {watch('lastName')}</p>
    </div>
  );
};

export default RegisterForm;
```

Es importante que veas que esas validaciones se añaden al registrar un campo:

```jsx
<input placeholder='Last name' type='text' {...register('lastName', { required: true, minLength: 3 })} />
```

Y que para leer los errores debemos usar la propiedad errors de formState que nos ha devuelto el hook useForm:

```jsx
const {
  register,
  handleSubmit,
  watch,
  formState: { errors }
} = useForm();
```

De esta manera podremos pintar los errores:

```jsx
{errors?.firstName && <p className='register-form__error'>Este campo es obligatorio</p>}
```

Hemos visto también el método watch que nos devuelve useForm, el cual nos permite observar en todo momento el valor de un campo:

```jsx
<h2>Datos del formulario en "caliente":</h2>
<p>First name: {watch('firstName')}</p>
```

