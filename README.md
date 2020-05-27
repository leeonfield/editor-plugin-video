# Video Plugin for TOAST UI Editor

> This is a plugin of [TOAST UI Editor](https://github.com/nhn/tui.editor/tree/master/apps/editor) to embed video in Editor

[![npm version](https://img.shields.io/npm/v/@leeonfield/editor-plugin-video.svg)](https://www.npmjs.com/package/@leeonfield/editor-plugin-video)

## Support video list and code language
- [x] [YouTube](http://youtube.com/): youtube
- [x] [Tecent Video](http://v.qq.com/): qq
- [x] [Bilibili](http://bilibili.com/): bilibili
- [x] [Youku](http://youku.com/): youku

## 📦 Usage npm

To use the plugin, [`@toast-ui/editor`](https://github.com/nhn/tui.editor/tree/master/apps/editor) must be installed.

> Ref. [Getting Started](https://github.com/nhn/tui.editor/blob/master/apps/editor/docs/getting-started.md)

### Install

```sh
$ npm install @leeonfield/editor-plugin-video -S
```

### Import Plugin

#### ES Modules

```js
import videoPlugin from '@leeonfield/editor-plugin-video';
```

#### CommonJS

```js
const videoPlugin = require('@leeonfield/editor-plugin-video');
```

#### Use in Editor

```js
// ...

import Editor from '@toast-ui/editor';
import videoPlugin from '@leeonfield/editor-plugin-video';

const editor = new Editor({
  // ...
  plugins: [videoPlugin]
});

```



#### Use in Viewer

```js
// ...

import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import videoPlugin from '@leeonfield/editor-plugin-video';

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

// ...

const viewer = Editor.factory({
  // ...
  viewer: true,
  plugins: [videoPlugin]
});
```

### Custom Video list


```js
// ...

import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import videoPlugin from '@leeonfield/editor-plugin-video';

// ...

const viewer = new Viewer({
    // ...
    plugins: [
      [
        videoPlugin,
        {
          list: {
            youtube: 'http://player.youku.com/embed/',
          },
        },
      ],
    ],
  });
```

### embed video in markdown

````
``` youtbe
GveTAk727mM
```
````