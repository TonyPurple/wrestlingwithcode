---
title: "Writing Clear Code: The Power of Descriptive Naming"
excerpt: "What's my name? DMX and I be the best, you see the rest? They lookin' like they need a rest.."
coverImage: "/assets/blog/code-names/cover.jpg"
date: "2024-10-25T16:49:01Z"
author:
  name: Tony Vanoni
  picture: "/assets/blog/authors/default.svg"
ogImage:
  url: "/assets/blog/code-names/cover.jpg"
---

Day 2 of writing about reading "Clean Code". If this was a streaming show, the recap would tell you that "Clean Code" is a coding bible for writing clean, understandable code, and guess what? Naming conventions are a big part of that. So, let's talk about Chapter 2!

## Introduction

Ever struggle to understand someone else's code because the variable names look like gibberish? Yeah, me too. Naming things in code is like naming your pet – it should be clear and descriptive, otherwise, you're just asking for trouble down the line.

Think about it: imagine if your dog's name was just "Woof."\*
Sure, it technically tells you it's a dog, but is it a Golden Retriever, a Pug, or a Chihuahua? Not exactly helpful, right? The same goes for code. Names like "temp" or "data" might make sense to you right now, but what about six months from now, or when someone else has to work on that code?

_Sidebar_ - if you have a Shiba Inu you should just name it "Wan", which is the sound a Japanese dog makes and you should absolutely disregard my terrible analogy up above.

## Giving Your Code a Voice Through Clear Names

Take, for example, the fifteenMinutesLater variable in this function:

```
function generateVerificationToken() {
const currentTimestamp = Date.now();
const tokenExpiryTimestamp = currentTimestamp + 15 * 60 * 1000;
const fifteenMinutesLater = new Date(tokenExpiryTimestamp);

return jwt.sign(
    { expires: fifteenMinutesLater },
  );
};
```

Why Is This Name Good?

fifteenMinutesLater is a great name because it instantly tells you the purpose of the variable: it represents a time exactly fifteen minutes after the current timestamp. It could have easily been named something generic like expiryDate or expirationTime, but those names wouldn't convey as clearly that it's always fifteen minutes in the future.

Clear naming like this is especially helpful for anyone else working on this code – or even for future you, when you've forgotten the specifics of your implementation. It removes ambiguity and makes it obvious what the variable is for without needing to dig through comments or decipher complex logic.

Clean Naming Recap

Using descriptive names like fifteenMinutesLater gives your code a voice. It tells the reader what's happening without needing to dive deeply into the code's logic. A good rule of thumb is to avoid generic names like data, info, temp, or result and instead favor names that convey what the variable represents in the context of your application.

This is a fundamental principle from "Clean Code": clear, expressive names make your code easier to read, understand, and maintain. Think of it like writing a story – each variable should contribute to the narrative, providing meaning rather than confusion. More of this, please!

## Be Honest, Don't Be Cryptic

Avoid names that could be misleading. temp could mean temperature or a temporary value – not exactly specific. Instead, be upfront: let temperatureCelsius or let temporaryValue.

Choosing clear and unambiguous names helps prevent misunderstandings and makes the codebase easier to navigate. Always aim to be as explicit as possible, so the next person reading your code knows exactly what each variable represents.

## Make Names Matter (But Don't Overdo It)

Don't get too hung up on tiny differences, though. "userData" vs. "adminData" makes sense, but "data" and "data1" not so much. Keep it clear and concise.

## Speaking of Clear... How About Pronounceable?

Let's face it, nobody wants to decipher a name like "genymdhmsepch." Just use "generationTimestampEpoch" and everyone (including yourself) will be happier.

## Searching Made Easy

Names that are easy to search for are a lifesaver, especially when you're digging through a big codebase. "maxUserCount" is way more helpful than just a generic "x."

## Mind Reading Not Required

Don't make people guess what a variable means. let r could be radius, ratio, or ranking. Instead, be specific: let gardenRadius.

Being explicit in your naming prevents confusion and makes it easier for others to understand the intent behind your code. Clear, descriptive names help eliminate ambiguity and ensure that everyone working with the code is on the same page.

## Classes and Methods: Nouns and Verbs

Think of classes like nouns – they represent things like "Customer" or "Order." Methods, on the other hand, are like verbs – they describe actions like "saveCustomerData" or "calculateOrderTotal."

## Consistency is Key

Once you pick a term for something, stick with it! Don't mix and match "fetchData" with "getUserData" – keep it consistent with "fetchUserData" throughout your code.

## Speaking the Same Language

Use terms relevant to your project. In a library system, "count" might not be very helpful. Instead, go with something like "overdueBookCount" for better context.

## Adding Context: A Little Goes a Long Way

Don't leave people hanging. let value is nice, but let orderValue tells the whole story.

Providing context in your variable names helps convey their purpose and meaning, making it easier for others to understand what the variable is used for. The more specific the name, the clearer the code becomes.

## The Takeaway: Names Matter!

Just like a good name can make you stand out in a crowd, clear and meaningful names can make your code stand out for all the right reasons. By following these tips from "Clean Code," you can write code that's not only functional but also easy to understand and maintain for yourself and your fellow developers.

## Naming things is hard.

_Stay tuned for Chapter 3: Functions!_
