---
title: "Generics in TypeScript: A Friendly Guide"
excerpt: "Unlocking the flexibility of type-safe code with generics"
coverImage: "/assets/blog/elgenerico/cover.jpg"
date: "2024-11-20T16:49:01Z"
author:
  name: Tony Vanoni
  picture: "/assets/blog/authors/default.svg"
ogImage:
  url: "/assets/blog/elgenerico/cover.jpg"
---

Generics in TypeScript are like shape-shifters for types—they allow you to write functions and classes that can work with different data types while still maintaining type safety. Imagine being able to create a function that can operate on various types without sacrificing the benefits of TypeScript's static typing. Let's dive into how generics make this possible.

## Introduction

At its core, a generic is a way to capture the type of an input so that you can use that same type elsewhere in your code. Think of it as telling TypeScript, "Whatever type comes in here, I want to use that exact type throughout this function or class."

## Basic Generic Function Example

Generics allow us to create components that can work over a variety of types rather than a single one. This is achieved by using type variables.

```typescript
function identity<Type>(arg: Type): Type {
  return arg;
}
```

In this function, Type is a type variable—a placeholder for the type that will be provided when the function is called. This means the function identity can accept any type, and it will return a value of that same type.

### Two Ways to Use It

You can use the identity function in two main ways:

1. **Explicitly specify the type**

```typescript
let output = identity<string>("myString");
```

Here, we're explicitly telling TypeScript that Type should be string.

2. **Let TypeScript infer the type(more common)**

```typescript
let output = identity("myString"); // TypeScript infers Type as string;
```

In this case, TypeScript infers the type based on the argument passed to the function.

### Working with Arrays

Generics become even more powerful when working with more complex types like arrays:

```typescript
function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}
```

In this function, Type[] indicates that arg is an array of some type Type. The function logs the length of the array and returns it. This allows the function to work with arrays of any type while still knowing the type of the elements within the array.

## Generic Interfaces

Just like functions, interfaces can be generic too. This lets you define flexible interfaces that can work with multiple types.

```typescript
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}
```

This interface describes a function that takes an argument of type Type and returns a value of the same type. You can use this interface to type functions that follow this pattern:

```typescript
let myIdentity: GenericIdentityFn<number> = identity;
```

Here, myIdentity is a function that takes a number and returns a number.

## Generic Type Constraints

Sometimes you want to limit the kinds of types that can be used with a generic function. You can achieve this by adding constraints to your generic type parameters.

```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}
```

In this example, Type is constrained to types that have a length property. If you try to call loggingIdentity with a type that doesn't have length, TypeScript will throw an error:

```typescript
// Error: number doesn't have a length property
loggingIdentity(3);
// Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
```

But this will work:

```typescript
loggingIdentity({ length: 10, value: 3 });
```

## Generic Type Parameters in Constraints

You can create functions that work with properties of objects in a type-safe manner by using constraints and the keyof operator.

```typescript
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}
```

Here, Key is constrained to the keys of Type. This ensures that when you access a property on obj, it is a valid property of Type.

```typescript
let x = { a: 1, b: 2, c: 3 };

getProperty(x, "a"); // Returns 1
getProperty(x, "m"); // Error: "m" is not a key of x
```


## Generic Parameter Defaults

Providing default types for generic parameters makes your functions and interfaces more flexible and easier to use.

```typescript
declare function create<T extends HTMLElement = HTMLDivElement>(
  element?: T
): Container<T>;
```

In this example, if you don't provide a type argument for Type, it defaults to HTMLDivElement.

```typescript
const div = create(); // Returns an HTMLDivElement
const span = create<HTMLSpanElement>(); // Returns an HTMLSpanElement
```

## The Bottom Line

Generics let you write more flexible, reusable code while keeping TypeScript's strict type checking. Think of them as type-smart functions that can adapt to different input types!
