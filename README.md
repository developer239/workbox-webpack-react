# Hot Workbox Webpack Express React Redux PWA

Progressive web app that takes advantage of new technologies to bring the best of mobile sites & native apps to users.

[Try it here](https://workbox-webpack-react-pwa-app.herokuapp.com) (it might take a while before the free server wakes up)

__Uses:__

 * Workbox
 * Express
 * Webpack
 * React
 * React Router
 * Redux

#### Installing the project
 
 Run
 ```yarn install```
 
 Make sure that `/public/vendor/vendors.js` file is generated.
 
 #### Development server
 
 Development server is served by [express framework](https://github.com/expressjs/express). Webpack is injected to the app through [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) and [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware).
 
 To start the server just run: `yarn dev`
 
 #### Production server
  
 Production server is also served by [express framework](https://github.com/expressjs/express).
  
 Project files are generated into the `/public` folder using `yarn build` command.
 
 Use `yarn prod` command in order to start the app. This command will build static files and start express server.
 
 #### Code Quality Tools
 
 * .editorconfig
 * eslint
 * airbnb

#### Other tips

* This app works offline thanks to service workers. If you have any problems with production changes. Don't forget to kill old service workers. In `chrome development tools -> application -> Clear Storage -> Clear Site Data`. Users will see updates on every `n + 1` visit. 

* This app is heroku ready. You have to set `heroku config:set NPM_CONFIG_PRODUCTION=false` on your heroku server. Everything else is prepared. `Procfile` will run `yarn prod` command.

* New npm dependencies should be added into the `vendors` array in `/webpack/webpack.dll.babel.js`. Dll file with vendor libraries is generated after every `yarn install`. This makes webpack builds a lot faster.
