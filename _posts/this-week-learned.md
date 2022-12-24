---
title: "This week I learned..."
excerpt: "That just because you can do something doesn't mean you need to. Here's the scene:"
coverImage: "/assets/blog/this-week-learned/cover.jpg"
date: "2022-12-11T12:39:07.322Z"
author:
  name: Tony Vanoni
  picture: "/assets/blog/authors/default.svg"
ogImage:
  url: "/assets/blog/this-week-learned/cover.jpg"
---

I was assigned a ticket to have our Docs page in Storybook mimic the desktop page width you can experience on the Canvas or, more specifically, how a user on desktop would actually experience it. If you are unfamiliar, Storybook's Docs have some stock configuration out of the gate that defaulted the container to a smaller viewport and could result in some wonky wrapping when visually testing your components etc. Because it is kind of a container within a container within a container, you can end up with some pretty unnatural viewports.

This ticket was picked up during a week where the CTO who configured Storybook in the first place was away and the STL didn't have time to help me make sense of it as a result. A brief Slack exchange with an always helpful Frontend Dev would seemingly confirm my intuition that I would need to figure out how to override the Docs container.

## To the Storybook docs about the Storybook Docs

They were fairly good, if not coming up a little short in detail. But I read every page, and settled on what seemed like the most logical approach to me. Build out a custom docs component that could be rendered in the place of the stock configuration using what are called Doc Blocks. It was simple enough to get started, but as I mentioned they don't actually have documentation for every property you can work with. I ended up working to a point where I was able to globally render the custom component in place of the Docs view, but I couldn't get it to actually pick up the information from each component's story. I could pull in the Primary story, but it would just render with the very Docs container inside of my custom component that I was trying to override in the first place. I was at a bit of a stand still.

On day 2 of the ticket, I was finally able to book some pair programming time with my STL. I showed him where I was and what was holding me up. He challenged me on whether I had read the docs, for which I had about 40 tabs of proof. And so we went on trying to pair program our way through the problem. He with docs on his side of the call, me with the very same docs on my side.

In his interpretation of the docs he keyed in on Theming, which would allow you to implement a custom Storybook theme with the installation of a specific package and some configuration. I explained to him that we already had our project theming being applied in the decorators of our Storybook config and this is why I didn't choose Theming as my solution. Being afraid of breaking something in my own code base, I didn't even think that we could just apply an additional theme. In the end, it wasn't even apples to apples in terms of implementation. I was just freaked out because we already use the project theme so heavily and I guess I thought I would be overriding it or something.

We agreed that it might actually be easier to do some CSS targeting and try this Theming approach. Through a little bit of trial and error, we were able to do in about 2 hours creating some objects and tweaking some CSS what I had spent the previous 6-8 trying to do by a much more difficult means in creating a component.

I suppose the key observation is how a senior and a junior can be looking at the same docs for the same problem and identify completely different solutions. Surprising no one, the senior identifies a path of significantly less resistance. Meanwhile, this junior just kind of keyed in on the approach that had the most buzzwords related to their problem. I wonder when the point will come that I am able to cut to the root of the problem with a little less tire spinning.

It's not an entirely isolated situation, I can point to 3 or 4 different occasions between my time on the interview circuit and my first few tickets as a professional where I seemed to want to solve a problem the most technical way possible (without the technical ability, I guess lol) when it could be approached much more simply. Say it with me juniors, not every ticket needs to be your capstone project. Work smart, not hard.

So yeah, if you want to go into the weeds on Storybook hit me up. Just know that you probably don't need to.
