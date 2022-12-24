---
title: "The Clean Coder: A Code of Conduct for Professional Programmers"
excerpt: "I'm starting to read Clean Coder, just getting into it but I've already come to my first major point of agreement.."
coverImage: "/assets/blog/clean-coder/cover.jpg"
date: "2022-12-21T06:47:07.322Z"
author:
  name: Tony Vanoni
  picture: "/assets/blog/authors/default.svg"
ogImage:
  url: "/assets/blog/clean-coder/cover.jpg"
---

![Screenshot](https://i.imgur.com/vrDtlQd.png)

The point in the above resonates with me because of 2 reasons. I've noticed newer devs like myself have a hesitancy towards changing code they didn't write, and then conversely I have found some people with a bit of experience under their belt will really start to lean on the whole in scope / out of scope thing maybe a little too heavily. The author really nails my feelings here with the Boy Scout Rule. Doing something in a certain way because that's how it was done previously is very common and can really deteriorate a code base if it snowballs.

## A case

I had a case recently where I changed the description of a test during a typescript conversion. My STL challenged me on why I did it, didn't even use question marks just hit me with the "why did you do this" so that's how you know he didn't like it. My answer was pretty simple, the previous description of the test sucked. I personally think if you are working in a file and see opportunities for improvement, take the time to clean it up. Especially on smaller things like the author lists here, improving variable names, breaking up functions where possible, reducing duplication, simplifying conditionals etc.

That said, out-of-scope refactoring can also get out of hand especially if your changes have unintended consequences. Ideally this is caught with your tests but not always. Further, it really can complicate the review process. But like the author stated, it doesn't have to be significant refactoring. Even just simple things like variable names. Even adding comments to something that might not be obvious! As with most things, it really depends on the situation.
