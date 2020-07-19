# Simple webpack example

This example contains a ```src/index.js``` file that calls on a node dependency, ```markit-down```, to convert markdown into html. It makes a simple conversion of one line and logs it to the console.

The purpose of this exercise is to demonstrate how the index.js and markit-down code get smooshed together by webpack and placed in ```dist/main.js```.

## Usage

```
git clone https://github.com/geocolumbus/simple-webpack-example.git
cd simple-webpack-example
npm install
npm start
```

### Now pack it up

```npm run build```

The simple code in src/index.js is combined with the markdown dependency into a single file dist/main.js

### Try running the packed file

```node dist/main.js```

This should give you the same result as ```node src/index.js```

Now look at the file to see how the code from src/index.js is mashed together with the dependency code.

```cat dist/main.js```

## What is missing?

Babel is missing. Babel will translate ES 6 to ES 5 so it will be more likely to run in a browser.

TODO!
