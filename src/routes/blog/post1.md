---
title: this website
date: "08/05/2024"
updated: "01/26/2025"
categories:
  - "devlog"
  - "musing"
  - "svelte"
---

So i've been meaning to put a personal website together since high school. I've made a few halfassed attempts, but thanks to one of my life's greater feats of procrastination, I only really started the summer after I graduated college.

...I guess it's better late than never?

---

## tech stack

This site is built with **Svelte** and **Tailwindcss**, deployed through **Vercel**. The blog (what you're reading right now!) uses **mdsvex**, which is this super cool preprocessor that lets me write these blog posts in Markdown instead of HTML, which would have been a fucking nightmare.

Building this site was my first time using Tailwind, and it probably shows if you end up looking at the source code lol - it's messy. I do really like it though! Inline classes make everything really simple to style, although I did reach a few limitations just in building this tiny site. I'm going to go ahead and assume that's my bad, maybe I'll change my mind on Tailwind if I build a bigger project with it.

I could have used any number of Javascript frameworks, like React or Vue, or even just vanilla HTML/CSS to get everything to look pretty much exactly the same. I only used Svelte because I wanted to learn more about it after using it for a school project, and I actually really like the file system routing Svelte has, even if it's sometimes very confusing to edit four seemingly identical `+page.svelte` files...

Vercel was also _incredibly_ easy to use. Literally two clicks and my project is just auto-deployed every time I push to the repo, for free which is excellent. If I accidentally get charged a hundred grand like that [one poor netlify user](https://www.reddit.com/r/webdev/comments/1b14bty/netlify_just_sent_me_a_104k_bill_for_a_simple/) I will be the first to un-glaze these guys.

## design

I spent literal months (for proof look at the dates up top) struggling to make any kind of decision on this website's looks. I had a few vague ideas, but other than the nonnegotiable that something HAD to be green, I didn't have any particular direction I was looking in.

That was until I was sorting/archiving my notes from college, and I came across a few that reminded me how much fun I used to have coming up with colour schemes for different topics or courses. Of course they always ended up messy as hell, cause I can't be trusted to both keep nice notes AND actually get all the content down, so some of these are nicer than the others. This did make me excited to finally have something that looked relatively like what I had in my head compared to the deranged scrawlings living on my iPad, though!

![cell biology notes](/images/blog/1-13.png "sorry for flashbanging you lol i went through a light paper phase in my final semester after using dark paper for every semester prior")
_Class notes from Plant Cell Biology senior year_

![cell biology notes 2](/images/blog/1-14.png "i'm honestly shocked i can read these - i swear my writing on paper is somewhat better, i still haven't figured out how to write well on the ipad")
_More notes from that class, but a different unit - hence the theme change_

![algorithms notes](/images/blog/1-5.png "are these notes useful? i honestly don't know. i think i read through them once before the final exam but they did help a lot to actually write")
_A review document from Algorithm Design junior year_

![leetcode solution](/images/blog/1-3.png "i watched the neetcode video for this like five times and still didnt get it (i did eventually)")
_My attempt at wrapping my head around this Leetcode problem_

![addiction notes](/images/blog/1-8.png "ANOTHER FLASHBANG im so sorry - i thought the nature of the content was insane + its objectively hilarious just how unreadable these scrawlings are (for context these are notes for a neuroscience paper i researched, wrote, and submitted in like ten hours? terrible experience 0/10 never do again)")
_This is just here because the content is so absurd_

...you get the picture.

Excited that I finally had some direction, I got to work scribbling around in GoodNotes and ended up with a rough idea that ended up being inspired partly by these notes and partly by Obsidian, which all my typed notes live in (and why this blog is in Markdown!). It ended up looking something like this:

![yay!!](/images/blog/1-1.png "i actually like this shitty illustration at least 50% more than the actual website, but i have no clue what about it makes it THAT much better")

The last step was to mock this layout up in Figma and figure out a colour scheme. This is what that looked like:

![](/images/blog/1-15.png "there was a LOT more fiddling with colours once I chose the final scheme, and it's still not perfect but it's fiiiine")
_As you can see I was toying with the idea of a light mode. That might be something to implement in the future, but since I see dark mode as the "right" way to look at this I'm not particularly motivated right now._

I then finally got to work implementing it in Tailwind. This was absolutely the easiest part. I found a genius little tailwind snippet for the dot grid background from [Julien Thibeaut](https://ibelick.com/blog/create-grid-and-dot-backgrounds-with-css-tailwind-css), and I decided to forgo having green as the theme colour for every page in favour of associating each page with a different core theme colour. Other than some fiddling for the persistent navbar colours to serve that vision, that was it.

I'm really happy with the balance of (sort of) whimsy and techy-ness I managed to pull off with this design. I might want to incorporate some hand-drawn elements in the future to take away from the monospace and everything, but I haven't even really finished the site yet so that's definitely a lower priority.

### typography

`Jetbrains Mono` is used for everything except the blog's body text - I'm still looking for a font that looks nice with Jetbrains but is actually readable in long blocks of prose. For now we're just using the browser's default sans serif, which seems to do the job.

## future plans

This section is kind of unnecessary beyond the todo list (which is already in the `README`) but I digress. I'm not looking to make this anything beyond a little corner of the internet to mess around in, but if I do end up wanting to expand the scope (or just change how I laid some things out) I guess they'll end up here.

- photo gallery
- choose a font for blog
- maybe light mode or multiple themes
- optimize navbar for smaller screens
- ~~projects page~~
- ~~actually implement list styling~~
- ~~design revamp~~

I realize some of these elements (blog, photo gallery) are better "implemented" by just linking to third party services like substack or instagram/flickr (does anyone even use flickr anymore?), but half the reason this site exists is because I wanted to figure it out myself, and here we are. I recognize no one is actually looking at my writing or photography on here, and I'm not really trying to show it off either.

It just lives here, if someone wants to take a look.

---
