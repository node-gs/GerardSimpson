---
layout: post
title:  "Building a Euchre Playing Algorithim"
date:   2016-4-06 12:00:00
categories: 
---
I was approached by my stepfather to build a JavaScript program that could play Euchre.

After about 15 minutes of discussion and a lot of words like: Monte Carlo, alpha beta pruning, trees and minimax, I thought "why not?" and so began my journey into building my first fully fledged algorithim.

As he is based in New Zealand, I thought this was also a good opportunity to refresh my git knowledge, as my day job used tortoiseSVN exclusively.

And thus, a pretty crude repository: https://github.com/node-gs/bridge-game-master/ was born. After learning about how to set up a private repo, it was left stagnant, and we continued to develop in a private repo.

Our first plan of attack was to build flow chart of conditionals, with options that the AI player would execute based upon the cards they in hand and their position in the game. Once we had this working we thought that we could just add some sort of monte carlo optimisation into these conditional statements, to fine tune card selection.

We were wrong.   


After about a month of working in my spare time to patch together this heuristic algorithim, I decided to start reading up on MCTS. After browsing the web and scrolling through a few youtube videos, I decided I need more than just an overview of this algorithim. I chose the following journal article, which turned out to be a great find:

http://www.cameronius.com/cv/mcts-survey-master.pdf

Not having any idea about what a Monte Carlo tree search algorithim was before beginning this project was, let's just say, a learning experience. The way that the algorithim approached the game turned out to be completely at odds with what I had built.

I read, and re-read the article over the course of the following week, referenced the material against what I had already learned and came to the realisation that almost everything apart from the Vue.js front end I had built so far needed to be scrapped. This was an important lesson  in my development as a web developer! Understand the requirements of what you need to build as completely as possible, before starting to build it!

To find out about MCTS, and some of the considerations I pondered while developing it to play Euchre, please read the [next]({{page.next.url  | prepend: site.baseurl}}) article in the series


