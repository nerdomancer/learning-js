# Notes

This repository contains the training material for Pluralsight course: [Building Applications with React and Flux.](https://app.pluralsight.com/player?course=react-flux-building-applications&author=cory-house&name=react-flux-building-applications-m2)

## Technology Stack

* Node.js
* React
* Browserify
* React Router
* Flux
* Jest
* Gulp

## React Core Concepts

* Angular, Ember and Knockout tries to put JS in HTML. If you make a typo mistake it is difficult to trace where the error is. It is also difficult to debug if an error is causing from the sync loss between HTML and JS.

* React tries to put HTML in JS which is pretty powerful. If you make a typo mistake, JSX will tell you exact line number and it won't even compile.

### React Component Lifecycle

#### componentWillMount

* **When it is executed:** Before initial render, both client and server.
* **When to use:** Good spot to set initial state.

#### componentDidMount

* **When it is executed:** After render.
* **When to use:** Access DOM, integrate with frameworks, set timers, AJAX requests.

#### componentWillReceiveProps

* **When it is executed:** When receiving new props. Not called on initial render.
* **When to use:** Good spot to set state before a render.

#### shouldComponentUpdate

* **When it is executed:** Before render when new props or state are being received.
* **Why use:** Use for better performance. Sometimes this method should return `false` to prevent unnecessary render call to the component.

#### componentWillUpdate

* **When it is executed:** Immediately before rendering when new props or state are being received.
* **When to use:** Prepare for an update. (Note: You cannot call `setState`within this function.)

#### componentDidUpdate

* **When it is executed:** After component's updates are flushed to the DOM.
* **When to use:** Work with the DOM after an update.

#### componentWillUnmount

* **When it is executed:** Immediately before component is removed from the DOM
* **When to use:** Cleanup and dispose resources.

### Keys for Dynamic Children

Each child components should have a unique id.

```jsx
<tr key={author.id}>
```

In this example the key is the id of the database record for author.

## Controller Views

### Prop Validation

PropType Validation does not run on minified version of React. So type validation is enforced only during development.

``` js
propTypes: {
    author: React.PropTypes.object.isRequired,
    onSave: React.PropTypes.func.isRequired,
    optionalArray: React.PropTypes.array,
    optionalBool: React.PropTypes.bool,
    optionalFunc: React.PropTypes.func,
    optionalNumber: React.PropTypes.number,
    optionalObject: React.PropTypes.object,
    optionalString: React.PropTypes.string
}
```