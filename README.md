# Yafte — Portfolio

Portfolio estático bilingüe de Yafte, diseñado como una ventana de terminal inspirada en Neovim y en la paleta **Black Ember**.

## Ejecutar localmente

No requiere instalación. Desde la raíz del proyecto:

```sh
python3 -m http.server 8080
```

Después abre `http://localhost:8080`.

## Uso

- Cambia el idioma con el botón `EN` / `ES`. La elección se guarda en el navegador.
- Navega con las pestañas o con los comandos: `home`, `about`, `work`, `projects`, `contact`, `help` y `clear`.
- Atajos: `/` enfoca el prompt; `j` y `k` cambian de pestaña; `Esc` sale del prompt.

## Estructura

```text
index.html             contenido y estructura
assets/css/style.css   interfaz y tokens Black Ember
assets/js/i18n.js      traducciones ES/EN
assets/js/main.js      navegación y prompt de comandos
assets/cv/             currículum descargable
```

## Contenido

Incluye enlaces a los proyectos públicos [TakoLab](https://takolab.vercel.app/) y [Órbita Matemática](https://orbita-matematica-seven.vercel.app/), además de GitHub y LinkedIn. Actualiza los textos en `index.html` y sus equivalentes en `assets/js/i18n.js` al cambiar contenido.

## Paleta

La interfaz utiliza los roles del tema [Black Ember](https://github.com/RedYaafte/black-ember): fondos carbón, texto cálido, bronce/ámbar para foco y salvia/cian para semántica de código.

## Despliegue

El proyecto está preparado para GitHub Pages: publica el contenido de esta rama en el repositorio `redyaafte.github.io`.
