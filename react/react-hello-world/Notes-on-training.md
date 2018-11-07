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

## Snapshot testing

* Complements conventional testing
* Tests less clearly defined aspects
* Good for testing rapidly changing parts of the code like css, styles or the content of the application
* It is **not** for critical logic
* It is **not** for understanding developer expectations

## Coverage

* With `create-react-app` use the following command to create a coverage report:
  * `npm test -- --coverage`

| File               |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
| :----------------: | :------: | :------: | :------: | :------: | :---------------: |
| All files          |       35 |    17.14 |       40 |       35 |                   |
|  src               |    11.36 |     6.45 |     6.25 |    11.36 |                   |
|   index.js         |        0 |      100 |      100 |        0 |           1,2,3,4 |
|   mapChooser.js    |      100 |      100 |      100 |      100 |                   |
|   serviceWorker.js |        0 |        0 |        0 |        0 |... 19,126,127,128 |
|   setupTests.js    |      100 |      100 |      100 |      100 |                   |
|  src/components    |      100 |      100 |      100 |      100 |                   |
|   Button.js        |      100 |      100 |      100 |      100 |                   |
|   Header.js        |      100 |      100 |      100 |      100 |                   |
|   Map.js           |      100 |      100 |      100 |      100 |                   |
|  src/containers    |      100 |      100 |      100 |      100 |                   |
|   App.js           |      100 |      100 |      100 |      100 |                   |
|   StoreLocator.js  |      100 |      100 |      100 |      100 |                   |


`Test Suites: 6 passed, 6 total`

`Tests:       23 passed, 23 total`

`Snapshots:   1 passed, 1 total`

`Time:        9.455s`

`Ran all test suites.`