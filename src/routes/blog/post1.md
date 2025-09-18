---
title: This Website
date: 08/05/2024
updated: 05/27/2025
categories:
  - code
  - design
---

So i've been meaning to put a personal website together since high school. I've made a few halfassed attempts, but thanks to one of my life's greater feats of procrastination, I only really started the summer after I graduated college.

...I guess it's better late than never?

---

## Tech Stack

This site is built with Svelte and Tailwindcss, deployed through Vercel. The blog (what you're reading right now!) uses mdsvex, which is this super cool preprocessor that lets me write posts in Markdown instead of HTML - absolute nightmare avoided.

Building this site was my first time using Tailwind, and it probably shows - it's messy.
I do really like it though! Inline classes make everything really simple to style, although I did reach a few limitations just in building this tiny site. I'm going to go ahead and assume that's my bad, though - I'm a fan overall.

My rationale for using Svelte over the numerous other JS frameworks (or even just vanilla HTML/CSS) is just that I used it for a school project, really enjoyed it, and wanted to get more familiar with it. I actually really like the file system routing Svelte has, even if it's sometimes very confusing to edit four seemingly identical `+page.svelte` files.
Also - halfway through building this site, Svelte 5 came out, which is a huge change to the way Svelte works (what the hell is a rune), which is super cool ... and I have not had the energy to convert over just yet. Maybe in the future.

Vercel was _incredibly_ easy to use. Literally two clicks and my project auto-deploys every time I push to the repo, for _free_ which is excellent. If I accidentally get charged a hundred grand like that [one poor netlify user](https://www.reddit.com/r/webdev/comments/1b14bty/netlify_just_sent_me_a_104k_bill_for_a_simple/) however I will change my tune immediately.

## Design

I spent literal months (not joking, i'm slow) struggling to settle on this website's looks. I had a few vague ideas, but other than the nonnegotiable that something HAD to be green (my favourite colour, which if you know me is not hard to guess), I didn't have any particular direction I was looking in.

That was until I was archiving my notes from college, and I came across a few that reminded me how much fun I used to have coming up with colour schemes for different topics or courses. Of course they always ended up ... less than neat, since I apparently cannot be trusted to both keep nice notes _and_ get down all the content I need to. The opportunity to take my time and make something that actually did a little bit of both was super fun. My deranged iPad scrawlings look slightly less deranged.

![cell biology notes](/images/blog/1-13.png "sorry for flashbanging you lol i went through a light paper phase in my final semester after using dark paper for every semester prior")
_Class notes from Plant Cell Biology senior year_

![cell biology notes 2](/images/blog/1-14.png "i'm honestly shocked i can read these - i swear my writing on paper is somewhat better, i still haven't figured out how to write well on the ipad")
_More notes from that class, but a different unit - hence the theme change_

![algorithms notes](/images/blog/1-5.png "are these notes useful? i honestly don't know. i think i read through them once before the final exam but they did help a lot to actually write")
_A review page from Algorithm Design junior year_

![leetcode solution](/images/blog/1-3.png "i watched the neetcode video for this like five times and still didnt get it (i did eventually)")
_My attempt at wrapping my head around this Leetcode problem_

![addiction notes](/images/blog/1-8.png "ANOTHER FLASHBANG im so sorry - i thought the nature of the content was insane + its objectively hilarious just how unreadable these scrawlings are (for context these are notes for a neuroscience paper i researched, wrote, and submitted in like ten hours? terrible experience 0/10 never do again)")
_This is just here because the content is so absurd_

...you get the picture.

Excited that I finally had some direction, I got to work scribbling around in GoodNotes and ended up with a rough idea that ended up being inspired partly by these notes and partly by Obsidian, where my typed notes live. It ended up looking something like this:

![draft illustration](/images/blog/1-1.png "i actually like this shitty illustration at least 50% more than the actual website, but i have no clue what about it makes it THAT much better")

The last step was to mock this layout up in Figma and figure out a colour scheme. This is what that looked like:

![figma colour testing](/images/blog/1-15.png "there was a LOT more fiddling with colours once I chose the final scheme, and it's still not perfect but it's fiiiine")
\_As you can see I was toying with the idea of a light mode. That might be something to implement in the future, but I like the dark-only so far.

I then finally got to work implementing it in Tailwind. This was absolutely the easiest part. I found a lovely tailwind snippet for the dot grid background from [Julien Thibeaut](https://ibelick.com/blog/create-grid-and-dot-backgrounds-with-css-tailwind-css), and I decided (with an incredibly heavy heart) to forgo having green as the theme colour for every page in favour of associating each page with a different core theme colour. Other than some fiddling for the persistent navbar colours to serve that vision, that was it.

I'm really happy with the balance of (sort of) whimsy and techy-ness I managed to pull off with this design. I might want to incorporate some hand-drawn elements in the future to take away from the monospace everything, but that's definitely a lower priority.

### Typography

`Jetbrains Mono` is my font of choice for everything except the blog's body text - I'm still looking for a font goes well with Jetbrains but is actually readable as long blocks of prose. For now we're just using the browser's default sans serif, which is _good enough_ for now.

## Future Plans

As-is, this is pretty much exactly how I want this site to be - there might be some adjustments here and there, but other than the todo list in the `README` I don't have any grand aspirations.
I've just always wanted to have a little personal corner of the internet to call my own, and while it's taken me far too long to set up I'm glad I finally have something I'm happy with.

---
