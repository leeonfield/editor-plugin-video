# TOAST UI Editor : Video Plugin

> This is a plugin of [TOAST UI Editor](https://github.com/nhn/tui.editor/tree/master/apps/editor) to display video in Editor

[![npm version](https://img.shields.io/npm/v/@leeonfield/editor-plugin-video.svg)](https://www.npmjs.com/package/@leeonfield/editor-plugin-video)


## 📦 Usage npm

To use the plugin, [`@toast-ui/editor`](https://github.com/nhn/tui.editor/tree/master/apps/editor) must be installed.

> Ref. [Getting Started](https://github.com/nhn/tui.editor/blob/master/apps/editor/docs/getting-started.md)

### Install

```sh
$ npm install @leeonfield/editor-plugin-video -S
```

### Import Plugin

Along with the plugin, the plugin's dependency style must be imported. 
The `code-syntax-highlight` plugin has [`highlight.js`](https://highlightjs.org/) as a dependency, and you need to add a CSS file of `highlight.js`.

#### ES Modules

```js
import videoPlugin from '@leeonfield/editor-plugin-video';
```

#### CommonJS

```js
require('highlight.js/styles/github.css');

const videoPlugin = require('@leeonfield/editor-plugin-video');
```

#### With Viewer

As with creating an editor instance

```js
// ...

import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import videoPlugin from '@leeonfield/editor-plugin-video';

// Import highlgiht.js
// ...

const viewer = new Viewer({
  // ...
  plugins: [videoPlugin]
});
```

or

```js
// ...

import Editor from '@toast-ui/editor';
import videoPlugin from '@leeonfield/editor-plugin-video';

// Import highlgiht.js
// ...

const viewer = Editor.factory({
  // ...
  viewer: true,
  plugins: [videoPlugin]
});
```
