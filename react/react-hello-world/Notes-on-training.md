# Test Driven Development using React

## Types of Data in React

### 1 - Props

* Is passed from parent to child
* Is immutable

### 2 - State

* Is modified using `setState()`
* Calling `setState()` triggers a re-render
* State updates may be asyncronous

### How to decide if a data should be in state?

* Is it not passed from a parent?
* Does it change over time?
* Is it not possible to compute based on other props or state?

### Where should the state live?

* Identify every component that renders something based on the state value.
* Find a common owner or parent to those components.

### Inverse Data Flow

* React uses one-way data binding
* Make data flow explicit
* Update state using callbacks (events)

[[resources/inverse-data-flow.png|Inverse-data-flow]]

## What should be tested in a React Component

* Test the output
* Test the states
* Test the events
* Test edge cases