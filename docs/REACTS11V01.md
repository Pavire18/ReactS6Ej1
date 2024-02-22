# VIDEO 01 - Soporte para SCSS y SASS

En este vídeo veremos cómo dar soporte en un proyecto React a SCSS o SASS

Para ello lo primero que haremos será instalar la librería SASS de NPM:

<https://www.npmjs.com/package/sass>

Con el comando:

```jsx
npm i sass
```

Tras esto ya podremos cambiar todos los ficheros .css por .scss 

No te olvides de cambiar también los imports que se hacen desde los componentes:

```jsx
// import './App.css';
import './App.scss';
```

Tras esto ya podremos concatenar nuestros estilos, así como hacer import de otros ficheros SCS y hacer uso de de variables. Nuestro fichero App.scss modificado quedaría así:

```scss
@import "./variables.scss";

.App {
  text-align: center;

  &__link {
    color: $link-color;
  }

  &__logo {
    height: 40vmin;
    pointer-events: none;

    @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  &__header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```
