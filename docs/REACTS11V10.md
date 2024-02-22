# Video 10 - Ejercicio: Proyecto con ESLint, Prettier, Husky, react-hook-forms y react.intl

En este ejercicio debes recrear todo lo que hemos visto en la sesión y añadir algunas traducciones más. Para ello sigue los siguientes pasos:

**PASO 1:**

Crea un proyecto en blanco con create-react-app

**PASO 2:**

Instala eslint en tu proyecto y modifica el fichero .estlintrc.js a tu gusto. Recuerda que en el repositorio de la sesión puedes encontrar el nuestro :) 

**PASO 3:**

Instala la extensión prettier de visual studio y configura el fichero .prettierrc a tu gusto. Igual que con ESLint recuerda que en el repositorio puedes consultar nuestro fichero

**PASO 4:**

Instala husky y asegúrate de que en el precommit se ejecuta la tarea “lint”

Es importante que no te deje commitear si no cumples las reglas de lintado

Instala react-hook-form y replica el formulario que hemos visto en la sesión.

**PASO 5:**

Debe mostrar dos campos nombre y apellidos, y los datos más abajo tanto el caliente como los datos almacenados al hacer submit:

![form.jpg](/docs/assets/form.jpg)

**PASO 6:**

Instala la librería react-intl para traducir todos los textos de la aplicación.

Te dejamos por aquí los JSON de los 3 idiomas.

Español:

```jsx
{
  "hello": "¡Hola!",
  "register_form:register_title": "Formulario de registro:",
  "register_form:first_name": "Nombre",
  "register_form:last_name": "Apellido",
  "register_form:required_field": "Este campo es requerido",
  "register_form:required_field_3_chars": "Este campo es requerido y debe tener al menos 3 caracteres",
  "register_form:submit_button": "Aceptar",
  "register_form:form_data_title": "Datos del formulario:",
  "register_form:live_data_title": "Datos del formulario en \"caliente\":",
  "app:language_selector": "Selector de idioma",
  "app:spanish": "Español",
  "app:english": "Inglés",
  "app:french": "Francés",
  "app:change": "Cambiar"
}
```

Inglés:

```jsx
{
  "hello": "Hello!",
  "register_form:register_title": "Registration Form:",
  "register_form:first_name": "First name",
  "register_form:last_name": "Last name",
  "register_form:required_field": "This field is required",
  "register_form:required_field_3_chars": "This field is required and must be at least 3 characters long",
  "register_form:submit_button": "Submit",
  "register_form:form_data_title": "Form data:",
  "register_form:live_data_title": "Live form data:",
  "app:language_selector": "Language selector",
  "app:spanish": "Spanish",
  "app:english": "English",
  "app:french": "French",
  "app:change": "Change"
}
```

Francés:

```jsx
{
  "hello": "Bonjour!",
  "register_form:register_title": "Formulaire d'inscription:",
  "register_form:first_name": "Prénom",
  "register_form:last_name": "Nom de famille",
  "register_form:required_field": "Ce champ est obligatoire",
  "register_form:required_field_3_chars": "Ce champ est obligatoire et doit contenir au moins 3 caractères",
  "register_form:submit_button": "Soumettre",
  "register_form:form_data_title": "Données du formulaire:",
  "register_form:live_data_title": "Données en temps réel du formulaire:",
  "app:language_selector": "Sélecteur de langue",
  "app:spanish": "Espagnol",
  "app:english": "Anglais",
  "app:french": "Français",
  "app:change": "Changer"
}
```

**PASO 7:**

Implementa un selector de idioma. Puedes hacer el mismo que has visto en los vídeos:

![Untitled](/docs/assets/Untitled.png)

O si te atreves, realizar un selector haciendo uso de react-hook-forms:

![selector.jpg](/docs/assets/selector.jpg)

Resultado final de la APP en Español y mostrando errores:

![spanish.png](/docs/assets/spanish.png)

Resultado final de la APP en inglés y mostrando errores:

![Untitled](/docs/assets/Untitled%201.png)

Recuerda que el código que hemos visto durante los vídeos puedes encontrarlo en el siguiente repositorio:

<https://github.com/The-Valley-School/react-s11-linter-react-hook-forms>
