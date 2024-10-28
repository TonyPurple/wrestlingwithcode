---
title: "Formatting for Readability and Maintainability"
excerpt: "Dive into how the right formatting can make your code look as good as it works."
coverImage: "/assets/blog/formatting/cover.jpg"
date: "2024-10-28T16:49:01Z"
author:
  name: Tony Vanoni
  picture: "/assets/blog/authors/default.svg"
ogImage:
  url: "/assets/blog/formatting/cover.jpg"
---

I've been revisiting Robert C. Martin's "Clean Code," and it'll make you think about things you probably don't spend much time thinking about on your own. Such as formatting.

## Introduction

You might be tempted to think, "As long as it works, who cares how it looks?" But that mindset can create more problems than it solves. Clean, well-formatted code is easier to read, understand, and maintain over time. It's like the difference between reading a well-written book and one that's haphazardly formatted.

As Martin emphasizes, good formatting principles persist even as your codebase evolves. "Your style and discipline survives, even if your code does not." This makes formatting a vital skill for effective long-term code management and collaboration.

## Key Formatting Tips

Let's explore some of the key formatting tips that can elevate the quality of your code:

1. **File Size: Less Is More**

When it comes to file size, Martin emphasizes keeping source files manageable, typically in the range of 200–500 lines. Smaller files are easier to read, understand, and navigate. This aligns with the principle of “single responsibility,” where each file or module should have one clear purpose. As Martin notes, "Functionality will change, readability will not."

While brevity is beneficial, it’s also important to ensure that shorter code still clearly conveys intent. Compressing code too much can obscure its meaning, so aim for balance—make your code concise, but also easy to understand.

For example:

Separate component logic from styles and utility functions. Consider moving complex logic to custom hooks or helper functions to keep components readable and concise.

2. **The Newspaper Metaphor**

Martin encourages developers to structure their code like a well-written newspaper article: broad information at the top, narrowing down to details as you read further. This "newspaper metaphor" emphasizes the importance of natural flow and logical organization.

- Functions and methods should be declared in order of importance, with the main entry point at the top. Supporting functions follow in a sensible order.
- Each line should act like a sentence, and each block of lines like a paragraph, representing a complete thought. Blank lines are encouraged to separate these "paragraphs," making the code more digestible.

Imagine writing for an audience of other developers, including your future self. Your code should be as easy to scan as a newspaper—readers should be able to grasp the overall purpose without extra effort.

For example, in a parent-child component relationship, the parent should render first, with children nested within it—mirroring a logical reading flow.

3. **Horizontal Formatting: Keep It Tidy**

Martin also highlights the significance of horizontal formatting. Lines should be concise—aim to keep them under 120 characters to avoid horizontal scrolling, which disrupts readability.

- Align related elements (e.g., assignments in a list) to make relationships clearer.
- Use whitespace effectively to break up complex expressions and improve clarity.

The best rule of thumb: "You should never have to scroll to the right." This helps maintain a clean, consistent look that reduces cognitive load and enhances the flow of reading code.

This is particularly important in JSX, where formatting can become cluttered and hard to read with too many props or nested elements.

4. **Variable Declaration: Proximity and Context**

Variables should be declared as close as possible to where they are used. This keeps the context clear and reduces the need to scroll up and down to understand a variable's purpose.

- Declare state variables at the top of the component body using hooks like useState or useReducer. This keeps state handling clear and easy to identify.
- Context variables from useContext should also be declared at the top, ensuring they're visible to anyone reading the component.

5. **Indentation: A Hierarchy of Ideas**

Indentation reflects the hierarchy of code. It's not just a style choice; it's a structural element that makes code readable at a glance.

- Use consistent indentation to indicate component hierarchy, with each nested element indented once.
- Use consistent spacing to distinguish code blocks clearly, making it easy to identify control structures, loops, and nested conditions.

Proper indentation can act as a visual outline, helping developers quickly understand the scope and structure of a program.

6. **Formatting as a Team**

When working in a team, consistency is key. Martin emphasizes the importance of agreeing on a common style guide at the start of a project to ensure coherent formatting across contributions.

- Discuss formatting rules as a team, from the placement of braces to the number of spaces for indentation. Consistent formatting avoids confusion and ensures that code is uniformly readable.
- Tools like Prettier can be configured to format JSX, ensuring consistent indentation, spacing, and line breaks.
- ESLint plugins for React can enforce rules specific to React best practices, such as prop validation, no-unused-vars, and consistent prop types or TypeScript typings.

Having a shared configuration file for Prettier and ESLint (e.g., .eslintrc and .prettierrc) helps enforce consistent formatting across the team.

## Remember

Our tools have greatly improved in maintaining consistent formatting. Tools like Prettier and ESLint can automatically enforce many formatting rules, ensuring consistency across the codebase. Having these tools integrated into the developer's IDE setup ensures that formatting is maintained from the start.

## The Bottom Line

Well-formatted code is an investment in future readability, collaboration, and maintainability. As Martin puts it, "When people look under the hood, we want them to be impressed with the ... attention to detail they perceive."

_Stay tuned for Chapter 6: Objects and Data Structures._
