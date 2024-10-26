---
title: "Clean Code: Writing Functions Like a Boss! "
excerpt: "Robert C. Martin, the biggest boss that you've seen thus far.."
coverImage: "/assets/blog/functions-like-a-boss/cover.jpg"
date: "2024-10-26T16:49:01Z"
author:
  name: Tony Vanoni
  picture: "/assets/blog/authors/default.svg"
ogImage:
  url: "/assets/blog/functions-like-a-boss/cover.jpg"
---

Reading, writing, and rocking with "Clean Code". Day 3.

## Introduction

This chapter in "Clean Code" by Robert C. Martin dives into how to write functions that are clear, concise, and easy to work with, like having the perfect tools in your toolbox.

## Short & Sweet Functions

Imagine a function that stretches on like one of those old Stretch Armstrong dolls—while it might seem fun and versatile, the longer it stretches, the less effective it becomes and eventually it rips and you get to see the green goo inside and then patch it up with duct tape in a display of remorse. Definitely not something that ever happened to me, but.. Not exactly ideal, right? Just like a cluttered toolbox is annoying to dig through, functions should be small and focused, ideally just a few lines long. This makes them easier to understand, maintain, and more likely to do one thing really well.

Think of it like a single-purpose tool—like a can opener. You know exactly what it’s for and how to use it, without the confusion of multiple attachments or settings. Short, sweet functions work the same way: they’re designed for clarity and efficiency, allowing you to tackle problems without unnecessary complexity, just like a Stretch Armstrong is best enjoyed when it stays within its intended limits. Also, get an electric can opener.

## One Function, One Job

This principle is all about keeping things simple. Each function should handle just one task, making it a breeze to understand, test, and maintain. A function that does one thing is naturally smaller, easier to name, and more reusable. It's like having a dedicated tool for each job, instead of a Swiss Army knife that might be confusing to use and typically lacks efficacy with any one of the purposes it serves.

## Naming Matters!

Using clear and descriptive names for your functions is crucial. Even if they're a bit longer, good names make your code way easier to read and understand. They're like labels on your tools - anyone can grab them and know exactly what they're for. Plus, shorter functions are generally easier to name. If you're struggling to name a function, it might be a sign that it needs a redesign to be more focused.

## Less is More (Arguments)

The fewer arguments a function takes, the better. Ideally, a function should have zero arguments (niladic), followed by one (monadic), and then two (dyadic). Three arguments (triadic) are manageable, but more than that (polyadic) can lead to confusion, especially in React where props can stack up quickly.

Consider this: functions with no or just one argument are straightforward and easier to test. The more arguments you introduce, the more complicated it becomes to remember their order and purpose—yes, IDEs help, but simplicity is key.

## Command or Query, Pick One

Functions should either perform an action or return information, but not both. This keeps things clear and avoids confusion. Imagine a function that sets an attribute and also returns a success status - it's not exactly clear what's going on. To improve readability, separate these actions into distinct functions.

This aligns with a fancy principle called Command Query Responsibility Segregation (CQRS). Basically, it's about separating commands (actions) from queries (getting information). This makes your code cleaner and easier to follow.

## Exceptions are Your Friend

Returning error codes from functions can make your code hard to read and manage, especially when you have nested if statements to check for errors. Instead, use exceptions! Exceptions separate error handling from regular processing, resulting in cleaner and more readable code. It's like having a dedicated toolbox drawer for error handling tools, keeping things organized.

## Don't Repeat Yourself (DRY)

If you find yourself copying the same code all over the place, it's time to DRY it out (Don't Repeat Yourself!). Repeated code can be hard to read, maintain, and can lead to inconsistencies if you update one instance but forget another. Instead, consolidate that code into a single function or method. This keeps your code clean, reduces the risk of errors, and makes maintenance easier.

## The Takeaway:

Writing clean code isn't just about making it work, it's about making it easy to understand, maintain, and enjoyable to work with. This chapter reminds us that well-written functions, like well-organized tools, make our coding lives easier.

## There's a lot to consider in this chapter. I always find that the clarity of your code reflects the clarity of your thoughts at the time. For me, it's always been easier to apply these principles as I perform a self-review on my code before pushing up an MR. Goals I suppose!

_Stay tuned for Chapter 4: Comments (hint: bad code shouldn't need comments!)_
