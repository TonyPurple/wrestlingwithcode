---
title: "Comments: The Necessary Evil of Coding or Lifesavers for Future You?"
excerpt: "Dear future me.."
coverImage: "/assets/blog/comments/cover.jpg"
date: "2024-10-27T16:49:01Z"
author:
  name: Tony Vanoni
  picture: "/assets/blog/authors/default.svg"
ogImage:
  url: "/assets/blog/comments/cover.jpg"
---

Some comments about comments.

## Introduction

Let's talk about comments – that polarizing topic that every developer has strong feelings about. If you're like me, you've probably caught yourself leaving comments like "what mastermind wrote this?" as you try to debug a particularly hard to follow section of code, only to come back later and add, "Yeah, I know it was me".

## The Great Comment Debate

Robert C. Martin, in his book "Clean Code," takes a pretty strong stance: comments are a necessary evil. While I see his point, my experience has taught me that the reality isn't quite so black and white. Sure, the dream is to write code so crystal clear that comments become unnecessary – but let's be real, sometimes that's about as achievable as inbox zero.

## The Golden Rule: Don't Comment Bad Code—Rewrite It

Here's something I've learned the hard way: if you're writing comments to explain confusing code, you're solving the wrong problem. Bad code with good comments is still bad code. It's like putting a fancy description on a dating profile photo from 10 years ago – it might explain things, but wouldn't it be better to just update the photo?

The real issue with comments isn't just about code clarity – it's about maintenance. Comments are like promises to your future self, and like any promise, they can be broken. As code evolves, comments often get left behind, becoming the equivalent of outdated documentation. Martin wasn't kidding when he said "comments can lie as they age."

## The Good, The Bad, and The Comment-ly

### Comments That Actually Help

1. **Legal Comments**

   - Those copyright headers we can't escape
   - Licensing information that keeps the lawyers happy

   ```javascript
   /*
    * Copyright (c) 2024 Tony Vanoni
    * Licensed under MIT
    */
   ```

2. **Informative Comments**

   - Perfect for those "I'll definitely remember why I wrote this" moments
   - Especially useful for complex regex or algorithms

   ```javascript
   // Matches email addresses with international character support
   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   ```

3. **Intent Explanation**

   - When the "why" isn't obvious from the "what"
   - Future you will thank past you for these

   ```javascript
   // Using parseInt here instead of Number() to handle trailing non-numeric characters
   const value = parseInt(userInput, 10);
   ```

4. **Warning Comments**

   - The "Here Be Dragons" of code
   - Crucial for performance implications or edge cases

   ```javascript
   // WARNING: This operation can take several minutes with large datasets
   function processLargeDataset() {
   ```

5. **TODO Comments**
   - Your coding inbox
   - Keep them actionable and temporary
   ```javascript
   // TODO: Implement retry logic for API failures
   // TODO: Add error boundary for better error handling
   ```

### Comments That Need to Go

1. **The Captain Obvious**

   ```javascript
   // This adds two numbers
   function add(a, b) {
     return a + b;
   } // Please, no
   ```

2. **The Outdated Lie**

   ```javascript
   // Returns user email
   function getUserData() {  // Now returns full user object
   ```

3. **The Code Journal**
   ```javascript
   // 2023-01-01: Added feature X
   // 2023-02-01: Modified feature X
   // 2023-03-01: Deprecated feature X
   // Just use git history!
   ```

## React-Specific Comment Guidelines

When working with React, I've found these commenting patterns particularly useful:

```javascript
// DO THIS: Document complex prop interactions
type ButtonProps = {
  /**
   * Variant affects both color and hover states.
   * Use 'primary' for CTAs, 'secondary' for less prominent actions
   */
  variant: "primary" | "secondary",
};

// NOT THIS: Stating the obvious
type ButtonProps = {
  /** The text to display in the button */
  label: string, // Self-explanatory!
};
```

## My Personal Take

After years of coding and countless "what was I thinking?" moments, I've developed my own commenting strategy:

1. I comment as I code during active development – it helps me maintain context when jumping between files

2. Before submitting PRs, I do a "comment review" to remove redundant or obvious comments

3. I treat comments like documentation debt – if I need to explain something with a comment, I first consider if I can make the code clearer instead

## The Bottom Line

Comments are like garlic in cooking – essential in some dishes, but too much can ruin the meal. Use them thoughtfully, keep them fresh, and always consider if you can make the code more self-explanatory instead.

Ultimately, future you is the best judge of your commenting style. If you've ever come back to your code after months and thought "thank goodness I left that comment," you're probably doing something right.

_Stay tuned for Chapter 5: Formatting – where we'll dive into the tabs vs. spaces holy war (just kidding, spaces obviously win)._
