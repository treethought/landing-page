# structure

goodcall.nyc's landing page uses [react](https://github.com/facebook/react), [material-ui](http://www.material-ui.com/#/), [react-inline-grid](https://github.com/broucz/react-inline-grid), [browserify](http://browserify.org/), and [node](https://nodejs.org/en/)

`./index.js` is the entry point for the app

`./components/index.js` contains the root component of the app, which is a router

react components are stored in `./components` and have the following structure:

```
components/<component-name>
├── index.css
├── <partial-component-name>.js
├── ...
└── index.js
```

all CSS classes have the following format:

```
.<component-name>__<something>-<descriptive>
```

component stylesheets are imported in `./components/index.css`
