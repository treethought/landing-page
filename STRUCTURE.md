# structure

goodcall.nyc's landing page uses [react](https://github.com/facebook/react), [material-ui](http://www.material-ui.com/#/), [browserify](http://browserify.org/), and [node](https://nodejs.org/en/)

`./index.js` is the entry point for the app.

`./app/index.js` contains the root component of the app, which is a router

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

containers, found in `./app/containers` are components that interact with the api and manage state for their child components

all the website's copy is stored in `./app/content` and is imported as `content` to the router `./app/index.js`. in the router, relevant parts of `content` are passed down to each route's component as `props`
