---
title: "Dealing with Third-Party Code: A Clean Code Perspective"
excerpt: "Enter the messy world of third-party libraries and APIs"
coverImage: "/assets/blog/chapter-8/cover.jpg"
date: "2024-10-31T16:49:01Z"
author:
  name: Tony Vanoni
  picture: "/assets/blog/authors/default.svg"
ogImage:
  url: "/assets/blog/chapter-8/cover.jpg"
---

Third-party libraries and APIs can be a real pain, especially when they change or aren't quite what you need.

## Introduction

In JavaScript development, particularly with frameworks like React and Next.js, third-party libraries and APIs are practically unavoidable. While they empower us to build complex features quickly, they can also tightly couple our applications to specific dependencies. Uncle Bob's principles in Clean Code highlight strategies for managing these dependencies effectively—keeping our codebase flexible and reducing maintenance headaches.

## Learning Tests: Understand Before You Dive In

Third-party libraries and APIs are powerful but can be unpredictable. When integrating something new, learning tests in JavaScript are crucial:

- **Controlled Experiments in Jest or Mocha**: Write tests that mirror the actual calls you'll make to the library or API, such as Axios requests or a specific React hook.
- **Validate Behavior**: Learning tests help verify that the library or API does exactly what you expect, catching unexpected behaviors or limitations early.
- **Safeguard Against Updates**: These tests provide a safety net for future updates, allowing you to detect breaking changes when upgrading versions.

In JavaScript, where libraries are updated frequently, learning tests help you understand a library's quirks and create a solid foundation before integration.

## Wrapping Third-Party Code: Insulating Your Core

Directly embedding third-party libraries, such as Axios or even specific React hooks, throughout your app can create a maintenance challenge if these dependencies change. By wrapping third-party code, you create a buffer between your application logic and the dependency:

- **Controlled API Surface**: Create a wrapper that defines a simplified interface for external libraries, making the actual implementation details irrelevant to the rest of your app.

```javascript
// apiClient.js
import axios from "axios";

export const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error("Data fetching failed");
  }
};
```

- **Single Point of Update**: If a library changes, you only need to adjust the wrapper rather than every instance in your app.
- **Flexibility for Replacement**: Swapping out Axios for fetch or another HTTP client only requires updating `apiClient.js`, not the entire app.
- **Mocking Simplified**: A wrapper makes mocking third-party calls simpler in tests, especially with tools like Jest or Sinon.

## Ports and Adapters in JavaScript: Building for Flexibility

JavaScript development often involves API integrations that may not yet be available. The Port and Adapter pattern helps bridge this gap while keeping your code clean and adaptable:

- Define a Port (Interface): In a TypeScript-based JavaScript project, you could define an interface representing the expected API. Without TypeScript, a function signature serves as your “port,” ensuring a consistent structure for the adapter.

```javascript
// Example port definition
export const fetchUserData = (userId) =>
  Promise.resolve({
    /* simulated data */
  });
```

- Create a Mock Adapter: Write a fake implementation that simulates the API’s expected data. This allows development and testing to proceed without the actual API.

- Use the Adapter for Testing and Development: Use the mock adapter in tests or during early development, keeping your core code isolated from the actual API.

- Swap Adapters for Production: Once the API is ready, create a production adapter that integrates the real API. For example, if using Next.js, swap adapters conditionally based on environment.

```javascript
const fetchUserData =
  process.env.NODE_ENV === "production" ? realApiAdapter : mockApiAdapter;
```

By implementing ports and adapters, you keep the core logic isolated from the specifics of the dependency, providing flexibility to switch implementations as needed.

## The Reality Check: Is This Possible in Modern JavaScript?

Let's be real: while these principles sound great in theory, modern JavaScript development presents significant challenges:

1. **Rapid Ecosystem Evolution**:

   - Libraries change faster than you can write tests
   - Major version updates often introduce breaking changes
   - The abstraction overhead can become more complex than the problem it solves

2. **Performance Considerations**:

   - Each wrapper adds a small performance penalty
   - Over-abstraction can lead to decreased runtime efficiency
   - Modern bundlers and tree-shaking make direct imports more attractive

3. **Developer Experience**:
   - Developers prefer direct, idiomatic library usage
   - Wrappers can obscure library-specific features and optimizations
   - Maintenance of custom wrappers becomes its own technical debt

**Pragmatic Recommendation**:

- Use wrappers selectively
- Prioritize simple, direct integrations
- Implement minimal abstraction layers
- Focus on type safety and clear interfaces

## When to Actually Apply These Principles

Apply Uncle Bob's principles when:

- Working with mission-critical integrations
- Dealing with unstable or frequently changing libraries
- Building enterprise-grade applications with strict dependency management requirements

## Conclusion

Clean Code principles are guidelines, not strict rules. In JavaScript, pragmatism trumps dogmatic abstraction. Use these strategies as a tool, not a mandate.

_Stay adaptable, stay pragmatic._

_Stay tuned for Chapter 9: Unit Tests._
