---
title: "Clean Code: A Handbook of Agile Software Craftsmanship"
excerpt: "I've got some time so recently I've decided to revisit Clean Code now that I have a couple years of professional experience under my belt.."
coverImage: "/assets/blog/clean-code/cover.jpg"
date: "2024-10-24T06:47:07.322Z"
author:
  name: Tony Vanoni
  picture: "/assets/blog/authors/default.svg"
ogImage:
  url: "/assets/blog/clean-code/cover.jpg"
---

I have time to blog now... Blogs are cool.

## Introduction

I'm always looking to up my coding game and learn the best ways to write clean, efficient, and easy-to-maintain software. Currently, I'm revisiting the classic programming book called "Clean Code" by Robert C. Martin. It's amazing how these fundamental principles stay relevant no matter how much tech changes!

Now that I have a couple of years under my belt, I figured I'm gonna share some key takeaways from each chapter, kind of like cheat sheets for myself and anyone else who wants to write cleaner code. Here's what stuck out to me in Chapter 1:

## Why Clean Code Matters

Basically, no matter what fancy new tech comes along, coding is still the core of software development. Writing good code is crucial because it's how we solve problems and build software. Think of it as the foundation of a house – bad code is like building with wet sand. It works for awhile, on the surface it can even look pretty elegant. Eventually, that sand castle is going to come crashing down with each wave of new code added around it though!

## The Trouble with Bad Code

Bad code is like a messy room – it's hard to understand, fix, and keep clean in the long run. It might seem like a quick win at first, but trust me, it comes back to bite you later with:

- More bugs
- Slower development
- Higher costs

## The Price of a Messy Codebase

Just like a messy room takes longer to clean up, bad code costs more time and resources to maintain in the long run. Clean code, on the other hand, is like a well-organized space – it's easier to understand, change, and work with, saving everyone time and headaches down the road.

## Don't Scrap It, Refactor It!

Sometimes, the idea of starting a whole new codebase from scratch can be tempting, but it's usually not practical. It's better to gradually improve the existing code through refactoring, which is basically cleaning things up bit by bit. Think of it like decluttering your room – one step at a time!

## The Developer's Mindset

Your attitude towards code makes a big difference! If you care about writing clean code, it shows in the quality of your work. It's about craftsmanship and taking pride in your code, not just making it work. Just like you wouldn't want to live in a house of mice, you wouldn't want to work with messy code, right?

## Balancing Speed and Quality

The struggle is real – getting things done fast vs. taking the time to write clean code. While deadlines can pressure you to take shortcuts, clean code actually saves time in the long run because it's easier to maintain and less buggy. Think of it as an investment in the future!

## Clean Code as an Art

Writing clean code is like any other art form – it takes:

- Practice
- Learning
- Constant improvement

It's about simplicity, clarity, and making your code easy for others to understand. Good code should be enjoyable to work with, not a confusing puzzle!

## What Makes Code Clean?

The book offers different perspectives on clean code, but the main idea is to write code that's easy to:

- Read
- Maintain
- Modify

This means using clear names, keeping functions short, and writing tests to make sure everything works as expected.

## Clean Code = Better Software

Clean code leads to better software overall – it's easier to work with, has fewer bugs, and boosts productivity. It's a win-win for everyone involved!

## Different Strokes for Different Folks

Just like there are different martial arts styles, there are different software development methodologies. The key is to find one that works for you and be flexible enough to learn from others. But remember, without some kind of structure, things can get chaotic!

## We Are the Code Authors

Think of yourself as a code author, not just a programmer. Just like writers, we need to consider our audience – in this case, other developers who will read and maintain our code. Clear communication is key!

## The Boy Scout Rule

This is a great principle for software development: **"Leave the codebase cleaner than you found it."** This means making small improvements whenever you can. These small changes add up over time, making the code cleaner and easier to manage.

![Screenshot](https://i.imgur.com/vrDtlQd.png)

The point in the above resonates with me because of 2 reasons. I've noticed newer devs can have a hesitancy towards changing code they didn't write, and then conversely I have found some people with a bit of experience under their belt will really start to lean on the whole in scope / out of scope thing maybe a little too heavily. The author really nails my feelings here with the Boy Scout Rule. Doing something in a certain way because that's how it was done previously is very common and can really deteriorate a code base if it snowballs.

I had a case early in my career where I changed the description of a test during a typescript conversion. My STL challenged me on why I did it, didn't even use question marks just hit me with the "why did you do this" so that's how you know he didn't like it. My answer was pretty simple, the previous description of the test sucked. I personally think if you are working in a file and see opportunities for improvement, take the time to clean it up. Especially on smaller things like the author lists here, improving variable names, breaking up functions where possible, reducing duplication, simplifying conditionals etc.

That said, out-of-scope refactoring can also get out of hand especially if your changes have unintended consequences. Ideally this is caught with your tests but not always. Further, it really can complicate the review process. But like the author stated, it doesn't have to be significant refactoring. Even just simple things like variable names. Even adding comments to something that might not be obvious! As with most things, it really depends on the situation.

## Wrapping Up

Chapter 1 of "Clean Code" sets the stage for why writing clean code is so important. We learned about:

- The downsides of bad code
- The value of a good developer attitude
- The importance of clean code for efficient and sustainable software development

It's an ongoing effort, but the benefits are definitely worth it!

## Well that was a fun little recap. It's interesting to be reading through this again now that I'm not a complete newb. Some things click way more, and in other ways I can also still see areas where I could apply some of these notes a little bit more. It seems like it might be beneficial to keep summarizing the chapters to remind myself about the importance of clean code.

_Stay tuned for Chapter 2: Meaningful Names!_
