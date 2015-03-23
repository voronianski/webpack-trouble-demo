# Webpack-dev-server + Existing server = Some troubles

This demo could help to resolve the issues that I've stumbled upon during my first switch to [webpack](http://webpack.github.io/) from beloved [browserify](http://browserify.org/). 

## What I'm trying to do?

Use webpack-dev-server with hot reload and [react-hot-loader](https://github.com/gaearon/react-hot-loader) together with existing node.js server, preferably manage webpack with CLI. This demo is very minimal setup but concept should be clear.

## Issues

There are several bugs here. The major one which this repo shows is the problem with hot reload of `.jsx` files.

- https://github.com/webpack/webpack-dev-server/issues/135
- https://github.com/babel/babel-loader/issues/43

### Steps to reproduce

0. `npm install`
1. There is 2 start options - via CLI or via webpack's Node.js API, **both reproduce the same error**: `npm run start-by-cli`/`npm run start-by-api`
2. Go to http://localhost:8080
3. Try to change content of `./src/Page.jsx`
4. Observe error in console: `[HMR] Update failed: SyntaxError: Unexpected token < ...`

![](https://dl.dropboxusercontent.com/u/100463011/webpack-reload-bug.gif)

===

Also there is a bug with `entry` field as array which throws exceptions via CLI (explore it by changing [this line]()):

- https://github.com/webpack/webpack-dev-server/issues/117#issuecomment-84998107

---
