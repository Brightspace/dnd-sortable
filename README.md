# d2l-dnd-sortable
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/Brightspace/dnd-sortable)
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

Reorderable drag-and-drop lists

## Installation

`d2l-dnd-sortable` can be installed from [Bower][bower-url]:
```shell
bower install Brightspace/d2l-dnd-sortable
```

## Usage

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `d2l-dnd-sortable.html`:

```html
<head>
	<script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
	<link rel="import" href="bower_components/d2l-dnd-sortable/d2l-dnd-sortable.html">
</head>
```

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="../d2l-typography/d2l-typography.html">
    <link rel="import" href="d2l-dnd-sortable.html">
    <custom-style include="d2l-typography">
      <style is="custom-style" include="d2l-typography"></style>
    </custom-style>
    <style>
      html {
        font-size: 20px;
        font-family: 'Lato', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
      }
    </style>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
Simple div elements

```html
<d2l-dnd-sortable>
	<div>One</div>
	<div>Two</div>
	<div>Three</div>
</d2l-dnd-sortable>
```

With a dom-repeat and overridding some of the styling classes to style
the placeholder when an item is dragged, and the mirror of the dragged item.

```html
<d2l-dnd-sortable
	placeholder-class="dnd-placeholder"
	mirror-class="dnd-mirror"
	touch-mirror-class="dnd-touch-mirror"
	handle=".dnd-drag-handle"
>
	<template is="dom-repeat" items="[[_criteriaEntities]]" as="criterion">
		<div>[[criterion.name]]</div>
	</template>
</d2l-dnd-sortable>
```

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/3.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/3.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/3.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/3.0/docs/tools/polymer-cli-commands#tests):

```shell
npm run test:polymer:local
```

To lint AND run local unit tests:

```shell
npm test
```

[bower-url]: http://bower.io/search/?q=d2l-dnd-sortable
[bower-image]: https://badge.fury.io/bo/d2l-dnd-sortable.svg
[ci-url]: https://travis-ci.org/Brightspace/dnd-sortable
[ci-image]: https://travis-ci.org/Brightspace/dnd-sortable.svg?branch=master
