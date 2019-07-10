# ordersystem-elements
This is a working example of upgrading an AngularJS project using Angular Elements. I'm sure it will evolve over time, but for now, it features:

- ngx-build-plus for producing a single bundle
- Angular 8+
- Webpack 4+ for the AngularJS build
- AngularJS 1.7+ to include `ng-prop-*` and `ng-on-*` for working with Angular Elements

## Project Structure
- `client-legacy` is the AngularJS project. It's a simple order system client.
- `ordersystem-ce` is the Angular CLI project that includes `ngx-build-plus` and `@angular/elements`.
- `server` is a simple Express server that serves the data as well as the static `dist` folder inside of `client-legacy` for a production build.

## Developing with Elements
To create a new Angular Element:

1. Create a new component (either with the CLI or manually).
2. Add it to the `declarations` and `entryComponents` array in the correct module (at the moment, just `app.module.ts`).
3. Create the custom element in the `ngDoBootstrap` function of `app.module.ts`. This project iterates over an array of tuples to make creating multiple elements easier. You can just add a new tuple of the component and name to that array.
4. Run `npm run bundle:ce` to build the elements and move the files over to the AngularJS project.
5. Start the Express server (`npm start` in the `server` folder) and start the AngularJS Webpack server (`npm run dev` in the `client-legacy` folder).
6. Navigate to `localhost:8080` to see your work in action.

To see the production build, run `npm run build` in `client-legacy`. With the Express server running, navigate to `localhost:9001`.

## More Resources on Angular Elements and Upgrade
I've incorporated the work of many people in my research on upgrading with Elements. Check out their projects:

[Manfred Steyer](https://twitter.com/ManfredSteyer):
- [Elements series](https://www.softwarearchitekt.at/post/2018/07/13/angular-elements-part-i-a-dynamic-dashboard-in-four-steps-with-web-components.aspx)
- [Upgrading with Web Components](https://www.softwarearchitekt.at/post/2018/09/02/upgrading-with-web-components-from-angularjs-to-angular.aspx)
- [A Deep Look at Elements](https://www.youtube.com/watch?v=_QU0mpyF7bQ) (ng-conf 2019)
- [Beyond the Basics](https://www.youtube.com/watch?v=E9i3YBFxSSE) (ng-conf 2019)
- [ngx-build-plus](https://github.com/manfredsteyer/ngx-build-plus)

[Erin Coughlan](https://twitter.com/ErinCoughlan16):
- [AngularConnect 2018 Talk](https://www.youtube.com/watch?v=aXOYa4S96OM)
- [Devoxx Belgium 2018 Talk](https://www.youtube.com/watch?v=6KCnV72vrXY)
- [`create-ng1-wrapper`](https://github.com/ErinCoughlan/create-ng1-wrapper)

[Juri Strumpflohner](https://twitter.com/juristr): 
- [Egghead Course on Angular Elements](https://egghead.io/courses/getting-started-with-angular-elements)

[James Henry](https://twitter.com/MrJamesHenry):
- [`ng-custom-element`]( https://github.com/JamesHenry/ng-custom-element/) (adds similar to functionality to `ng-prop-` and `ng-on-` to pre-AngularJS 1.7 projects)

[Jeff Delaney](https://twitter.com/Jeffdelaney23) ([Fireship.io](https://fireship.io/)):
- [Advanced Angular Elements](https://www.youtube.com/watch?v=ujaMvl5M8nY)