1.COMPONENTS:

React components are the building blocks of a React application. They can be classified into two main types: Functional Components and Class Components. React components allow you to break down the UI into reusable pieces. Let's go over both types and some examples.

1. Functional Components
Functional components are simpler and more modern. They are basically JavaScript functions that return JSX (HTML-like syntax in React).

React components are the building blocks of a React application. They can be classified into two main types: Functional Components and Class Components. React components allow you to break down the UI into reusable pieces. Let's go over both types and some examples.

1. Functional Components
Functional components are simpler and more modern. They are basically JavaScript functions that return JSX (HTML-like syntax in React).

Example 1: Simple Functional Component
jsx

import React from 'react';

const Greeting = () => {
  return <h1>Hello, welcome to React!</h1>;
}

export default Greeting;
=====================================================
2.
What is JSX?
JSX (JavaScript XML) is a syntax extension for JavaScript, commonly used with React. It allows you to write HTML-like code within your JavaScript, making it easier to define the structure of your UI in React components. JSX is compiled into React.createElement() calls before being rendered to the DOM.


With js expressions
import React from 'react';

const Greeting = () => {
  const name = "Alice";
  const age = 25;
  
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
}

export default Greeting;
=================================================
