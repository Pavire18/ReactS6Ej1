# VIDEO 05 - Husky

En este vídeo hemos visto la librería Husky:

<https://typicode.github.io/husky/#/>

La librería Husky es una herramienta de automatización para Git que permite configurar ganchos o "hooks" para que se ejecuten automáticamente en ciertos momentos durante el ciclo de vida de Git, como por ejemplo antes de realizar un commit o antes de hacer un push. 

Los hooks de Git son scripts o comandos personalizados que se ejecutan automáticamente en respuesta a ciertos eventos de Git, lo que permite automatizar tareas y garantizar que se sigan ciertas prácticas de desarrollo.

Para instalarla en tu proyecto debes ejecutar en consola:

```jsx
npx husky-init && npm install
```

Tras esto modificar el fichero .husky/pre-commit para indicar que quieres que revise el linter antes de realizar un commit:

```jsx
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint
```

Con esto nos aseguramos que no se puede comitear código que no haya pasado las reglas de linter

