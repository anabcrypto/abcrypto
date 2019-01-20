---
title: Let's get started 
date: 2019-01-20
---

Solidity version which I'm going to use: v0.5.2

Minimal knowledge: In the most basic way Solidity is composed by a **contract**, made by **functions** and **states**. It needs a **version** which is specified in the **` pragma solidity `** line
as we will see. 

```solidity

pragma solidity 0.5.2;

contract HelloWorld {
    
}

```

So, in the first line you can see the version of this Solidity contract which is v0.5.2 , `pragma` is a common instruction to tell the compiler how to treat the source code ([1](https://en.wikipedia.org/wiki/Pragma_once "Pragma wikipedia page")).
`Solidity` as you can probably image references the Solidity usage. After `pragma solidity choosenVersion` don't forget to put the semicolon otherwise you can unexpected errors.

Then you write the contract name, in this scenario I called it `HelloWorld`. As you can see here and you will see in other parts the first letter of every world is capital because this is the convention.
So if you for instance want to name a contract "hey how you doin" you will write `contract HeyHowYouDoin`.

Inside the curly brackets you will write functions and states.


This page is still under development
---
