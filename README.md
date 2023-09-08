## Import Map based Micro-frontend

A simple demonstration of how you can use import maps to compose different
versions of different things right inside the browser.

This ships with a tiny server that just serves the static files in `/assets/`
and then uses an import map to compose them. The javascript files in assets are
ES modules that have been written by hand, but simulate being transpiled down
already, so they don't use TypeScript and all the JSX happens by hand.


### Run

``` shellsession
$ deno task dev
```
