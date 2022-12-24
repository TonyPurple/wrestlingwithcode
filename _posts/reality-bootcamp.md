---
title: "The reality of a fresh Bootcamp developer."
excerpt: "Bootcamp is a common way for new developers to jump-start their web development career. It’s a quick and dirty introduction to the latest development trend, but once hired, the real challenge begins.."
coverImage: "/assets/blog/reality-bootcamp/cover.jpg"
date: "2022-11-26T13:02:07.322Z"
author:
  name: Tony Vanoni
  picture: "/assets/blog/authors/default.svg"
ogImage:
  url: "/assets/blog/reality-bootcamp/cover.jpg"
---

The web development industry is challenging and it’s one of the few industries where traditional education isn’t necessarily required. While many developers have degrees in computer science, many others go through shorter diploma programs, are self-taught, or, like me, jump on the new Bootcamp trend that cram everything you need to know in a very short timeline (often 1 or 2 months) and send you on your way. While a great introduction to web development, Bootcamps can really only scratch the surface on web development. They touch on the latest technologies, which is great, but the industry is built on much more than the latest tech stack. As one of the latest junior developers to join Acro Media, I share my thoughts on being fresh to the industry and how challenging (often mentally) it can be to get up-to-speed.

I come from a bootcamp background and my first job is here with Acro Media. One of the pieces of feedback our trio of newbies has received is that we lack some programming fundamentals, and I don't disagree with that. One of my observations about bootcamps is that they will definitely just rush to giving you the method and tell you to use it, and that's about as deep as the teaching gets at times. This is really clear in working with whatever the framework of the day is. We focused on the MERN stack, and React is a prime example where we learned how to use the most important methods related to the React library but never really learned what's happening under the hood which definitely exposes you when technologies change and in general programming skills.

## An example

An example I can share of just rushing to the method is definitely the arr.sort() method. You just kind of get the syntax in your lesson notes and run with it. I don't think I ever understood why it works with subtraction in the return, though. Ex.

arr.sort((numA, numB) => numA-numB);

Of course, you can consult the docs and it's really quite simple.

![Screenshot](https://i.imgur.com/a31osW6.png)

This is where I'll go off on a bit of a tangent. When I interviewed at Acro Media, we were definitely talking mostly JavaScript (Acro Media was hiring React developers). But, the job posting and my employment contract both referenced PHP heavily (Acro Media largely works with Drupal, a CMS built with PHP). So, when I accepted the role, I kind of thought I was being trusted to be able to learn PHP and that's what I'd mostly be working in. I spent the month between accepting and onboarding just hammer-timing PHP trying to be ready. I did a bit of an algorithmic PHP course and then also a really simple no-framework web dev course that just relied on the built in PHP server and local storage basically. All that is to say, when I did get around to reading the docs for the sort method in JavaScript, the explanation kind of reminded me of PHP's spaceship operator, but it's essentially a combined comparison operator a <=> b where;

- if a < b then return -1
- if a = b then return 0
- if a > b then return 1

and when I encountered it during that month of thinking I was going to be a PHP developer I remember wondering if there was a JavaScript equivalent and was never really able to place it. Some Google searching led me to Math.sign(a-b) which I had no exposure to but it seemingly comes up short in terms of browser support as well as working for numbers but not arrays. Some more searching will lead you to the inevitability of writing your own function for it, with this one-liner floating around:

const spaceship = (a, b) => (a ?? 0).toString().localeCompare((b ?? 0).toString());
which will return a string comparison for everything.

I realize this has become the senseless meanderings of a junior dev, but I suppose the point is a reminder to myself and anyone in my position. It's really easy to pass off these weaknesses in programming fundamentals and just put yourself in the losing position because you went to a bootcamp and don't have a computer science degree, or to feel inadequate because you don't understand the feedback in tech review, but at the end of the day there's just some holes in the things you've learned and how you've learned them.
We are all in control of our learning from this point forward. What I’ve learned is don't focus solely on acquiring knowledge, focus on developing skills. Find similarities in other technologies, experiences, areas of life that help you visualize what you're trying to accomplish. Read the docs. Dive deeper. Don't just get unblocked and go off on your merry way. Ask the annoying clarifying questions to understand how the reviewer arrived at their answer. Grow from the feedback and become more independent over time.
Personally, being a dev is keeping me up at night. It's not because I hate that it's hard, it's because I am obsessed with doing better. Anyone who ever says being a dev is easy is likely just working on the technologies they like and not pushing themselves to get outside of their comfort zone and do the things that are difficult for them (all arms, no legs at the gym?). There's always going to be a bigger brain on the team. I am still learning, and I am better than I was in the beginning of September when I showed up. So just a friendly reminder for us all to stay curious. This is a pretty sweet thing we get to spend our time doing.

Take this story as some words of wisdom. This story is common for new developers and it’s a good reminder to us all. Yes, breaking into the industry is difficult and you’re likely going to have some stressful days, weeks, even months. Do your best to keep your head in a good place. The learning will be overcome with time and in the time that it takes... it never stops. Understand that right now is the steepest learning curve you'll face and eventually it starts to level out. Also, eventually you'll reach a point where the stress of it all starts to drop because you realize that what you're doing is actually good work. In the end we just keep moving on to the next problem anyway. One foot in front of the other. Try not to look too far ahead to where you should be... your path will take you where it takes you and opportunities will come up organically. Stay positive. People like positive people... so even if you take a bit more time as a developer, people would rather work with a nice person than a difficult person who just happens to be a good programmer naturally.
