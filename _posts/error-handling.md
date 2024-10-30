---
title: "Handling Errors Like A Pro: A Quick Dive"
excerpt: "Let's talk about errors, baby"
coverImage: "/assets/blog/error-handling/cover.webp"
date: "2024-10-30T16:49:01Z"
author:
  name: Tony Vanoni
  picture: "/assets/blog/authors/default.svg"
ogImage:
  url: "/assets/blog/error-handling/cover.webp"
---

We continue diving quickly, maybe even deeply, into Robert C. Martin's "Clean Code," and the key concepts. This morning's reading, Error Handling.

## Introduction

In any application, things will go wrong. But how we handle these errors makes a huge difference. Robert C. Martin (aka "Uncle Bob") emphasizes that while errors are inevitable, our code can still be clean, readable, and maintainable when handling them.

## Why Exceptions Are Better Than Return Codes

When something goes wrong in your code, you have a couple of options:

Return Codes: Functions return a status indicating success or failure, along with any data or errors. However, return codes have drawbacks:

- Easily overlooked: It's easy to forget to check return codes, leading to unhandled errors.
- Mixing concerns: Return codes mix error handling with the main logic, cluttering the "happy path."

Exceptions: Throwing exceptions is the preferred approach in most cases. Unlike return codes, exceptions:

- Stop execution immediately, allowing you to focus on handling the error in one place.
- Separate error handling from regular logic, making the code cleaner and more readable.

In React, error handling primarily focuses on managing UI states and avoiding application crashes. Here's how the concepts apply: Use exceptions to manage unexpected errors in asynchronous operations like data fetching, form submissions, or other side effects within components.

The key message: Use exceptions over return codes to keep code logic focused and error handling distinct.

## The NULL Case: Avoid It

NULL is a common source of errors, leading to NullPointerExceptions or similar issues across languages. In React, dealing with null values is often discouraged. Here's how to handle it:

- Don't return null from a function as an error indicator. Use exceptions instead.
- Avoid passing null as a prop, as it can lead to unexpected behavior in child components. Use default props or optional chaining (?.) to prevent null reference errors.

## The Try-Catch-Finally Trio

Using try-catch-finally blocks is the foundation of exception handling. Each block has a specific role:

- Try: Encloses the main logic, the "happy path." If an exception occurs, execution halts and control shifts to the catch block.
- Catch: Executes only when an exception occurs in the try block. Here, you can log errors, provide user feedback, or take corrective actions.
- Finally: Executes regardless of whether an exception is thrown. It's commonly used for cleanup tasks.

This pattern is still applicable in React, especially with asynchronous functions. Use try-catch blocks within async functions or event handlers to manage API errors, form validation issues, or unexpected behaviors.

## Start With Error Handling (TDD Approach)

Martin recommends using Test-Driven Development (TDD) by starting with tests that define exceptions. This approach ensures the error-handling structure is established upfront and obvious bad paths are accounted for before moving to the "happy path." TDD helps enforce robust error handling and allows you to build clean error-free code incrementally.

## Provide Context with Exceptions

When throwing exceptions, always provide enough information to understand the error:

- Source: Where did the error come from?
- Type: What kind of error is it? (e.g., network failure, file not found)

In React, providing context for errors is crucial for debugging. Use custom error messages when throwing exceptions, ensuring the error includes relevant details like the operation that failed and any useful context.

## The Special Case Pattern

For more complex error handling, the Special Case Pattern can help separate exceptional logic from the main flow. This can be implemented using custom hooks, allowing the main component logic to focus on rendering the "happy path" while the hook handles the special cases internally.

## The Bottom Line

To handle errors effectively:

- Avoid NULL as a return value or argument.
- Use exceptions over return codes for clearer error handling.
- Apply try-catch-finally to manage exceptions cleanly.
- Use the Special Case Pattern when error handling becomes complex.

By adopting these techniques, you can write more robust, maintainable code. Errors may be unavoidable, but how we handle them makes a big difference.

_Stay tuned for Chapter 8: Boundaries._
