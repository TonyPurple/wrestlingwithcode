---
title: "Objects, Data Structures, and the Law of Demeter: A Quick Dive"
excerpt: "When should you use objects, and when are simple data structures the better choice?"
coverImage: "/assets/blog/objects-data-structures/cover.jpg"
date: "2024-10-29T16:49:01Z"
author:
  name: Tony Vanoni
  picture: "/assets/blog/authors/default.svg"
ogImage:
  url: "/assets/blog/objects-data-structures/cover.jpg"
---

We continue diving quickly, maybe even deeply, into Robert C. Martin's "Clean Code," and the key concepts. This morning's reading, Objects & Data Structures.

## Introduction

You've probably heard the phrase "everything is an object." While this can be a powerful paradigm, it's not always the best approach. Sometimes, a simple data structure is all you need.

## Data Structures: The Humble Data Holder

In React, data structures often correspond to state objects or props that hold data but don’t have behavior attached to them.

- Props and context are primarily used to pass data down to components, making them simple data carriers.
- For complex state management, consider using tools like Redux or Context API, where the state acts as a central data structure with minimal behavior. It’s meant to provide information rather than to modify itself directly.

## Objects: The Encapsulated Beings

React components themselves can be seen as objects in the way they encapsulate state and behavior.

- Class components in React are more aligned with traditional object-oriented design, where methods interact with internal state.
- Functional components with hooks (e.g., useState and useEffect) encapsulate both data and behavior while promoting a more functional programming style.

React's approach to components aligns well with Martin’s principles—components should encapsulate functionality, exposing only the necessary interfaces (e.g., props).

## The Law of Demeter: “Talk to Friends, Not Strangers”

The Law of Demeter is a principle that suggests objects should interact with only their immediate neighbors. In other words, an object shouldn't know too much about the internal workings of other objects. This helps to keep your code loosely coupled and easier to maintain.

The Law of Demeter translates well to React. For example:

- Components should interact only with their direct children or props. Avoid having deeply nested child components reach out to modify state at the top of the component tree.
- Use context, prop drilling, or state management libraries to ensure data flows directly from parent to child without violating the Law of Demeter. This helps maintain clean, decoupled code where components only "talk" to their immediate neighbors.

## Data/Object Anti-Symmetry in React

The distinction between data and objects is reflected in React’s design patterns:

- Components act as objects that encapsulate behavior (e.g., form handling, data fetching).
- Data structures, like plain JavaScript objects or arrays, should remain passive, simply passing data through props or state without incorporating behavior.

For example, a component managing form submission logic is an “object,” while the data passed to it from an API response or user input acts as a “data structure.”

## Avoid Hybrid Structures in React

Mixing state and behavior in data structures can cause confusion:

- If you have a complex data object, consider moving related behavior into custom hooks or helper functions.
- Custom hooks can provide a clear separation between data (e.g., fetched state) and behavior (e.g., data transformation, side effects), adhering to the anti-symmetry principle.

## Bridging the Gap Between Languages

While the concepts of objects and data structures are fundamental to object-oriented programming, their implementation can vary between languages. In Java, for example, you can use public and private keywords to control access to fields and methods. In Python, you can use the \_ prefix to indicate private attributes.

React’s approach to public and private data is somewhat different from traditional OOP languages like Java:

- Public data in React is typically represented by props, which are passed down to components, making data flow more transparent.
- While there’s no formal “private” data concept, you can achieve encapsulation by using local state within components and limiting exposure to external components.

And of course, if you’re using TypeScript with React (and you probably should be), it can further help enforce data structure integrity by clearly defining types, interfaces, and props.

## The Bottom Line

By understanding the difference between objects and data structures, and by following principles like the Law of Demeter, you can write cleaner, more maintainable code. It's all about striking the right balance between encapsulation and simplicity.

As always, the best way to learn is by practice. So, keep coding, keep experimenting, and keep learning!

_Stay tuned for Chapter 7: Error Handling._
