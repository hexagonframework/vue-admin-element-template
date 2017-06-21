## Intro

> An element-ui based Vue.js admin template 

## Features

- Login/Logout
- Permission authentication
- Sidebar
- Breadcrumb
- ECharts
- 401, 404 error page
- Error log
- Table example
- Multi-environments distribution
- Collapsing sidebar (support nested routes)
- Mock data
- screenfull

## Development

```bash
# Clone project
git clone https://github.com/hexagonframework/vue-admin-element-template.git

# Install dependencies
yarn install

# Run local dev server
yarn run dev
```

Visit in browser: http://localhost:8080

## Distribution

```bash
# Build staged environment with webpack-bundle-analyzer
npm run build:sit-preview

# Build production environment
npm run build:prod
```

## Directory structure

```
├── build                      // build 
├── config                     // config
├── src                        // source code
│   ├── api                    // all requests
│   ├── assets                 // static resource like themes, fonts
│   ├── components             // global public components
│   ├── directive              // global directive
│   ├── filters                // global filters
│   ├── mock                   // mock data
│   ├── router                 // router
│   ├── store                  // global status management
│   ├── styles                 // global styles
│   ├── utils                  // global public functions
│   ├── view                   // view
│   ├── App.vue                // entry view
│   └── main.js                // entry for loading components, initialization
├── static                     // third-party libraries not packed with Webpack
│   ├── jquery
│   └── Tinymce                // rich text
├── .babelrc                   // babel-loader config
├── eslintrc.js                // eslint config
├── .gitignore                 // gitignore
├── favicon.ico                // favicon
├── index.html                 // html template
└── package.json               // package.json
```
