# Angular Conditional Attributes

## Description

AngularJS directive for dynamic conditional adding of attributes to HTML elements. Elements with this directive are recompiled with attributes added only if the passed condition is satisfied.

## Installation

```
npm install --save vi-angular-conditional-attributes
```

or

```
bower install vi-angular-conditional-attributes
```

Register the module into your main app module

```javascript
angular.module('myApp', ['vivify-ideas.conditional-attributes']);
```

## Usage

In the template, use the `vi-conditional-attributes` directive,
along with vi-condition specifying the condition that needs to be satisfied in order add attributes to that element, and vi-attr- prefixed attributes that you would like to be added.

### HTML

```html
<span vi-conditional-attributes vi-condition="someCondition()" vi-attr-ng-click="doSomething()" vi-attr-title="Some title.">Example</span>
```

---

LICENCE MIT