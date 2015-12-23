# generator-gulp-coffee

Generator a minimum gulp and coffee-script project with [Yeoman](http://yeoman.io).

## Getting Started

Not every new computer comes with a [Yeoman](http://yeoman.io) pre-installed. You only have to install it once.

```bash
$ npm install -g yo
```

### Yeoman Generators

To install generator-gulp-coffee from npm, run:

```bash
$ npm install -g generator-gulp-coffee
```

And then, create a directory to put you framer project in:

```bash
$ mkdir your-coffee-proj && cd $_
```

After that, initiate the generator:

```bash
$ yo gulp-coffee
```

This step takes time to install all dependencies that your project needs.

Finally, run `npm start` to start your development server and see the demo project.

Any `.coffee` files changed in `./src` will trigger a compilation process and the '.js' files will be written to `./lib` folder.