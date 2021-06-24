# w2-javascript

## About
We'll be covering about the main language used by the internet - JavaScript. I'm confident that we're all well-versed enough in the world of data structures, algorithms, time complexity, and other universal computer science fundamentals - so really, this week we're just going to be going over methodology that is unique and useful to web-focused languages like JavaScript. Things like the DOM, how it interacts with HTML elements, making API calls, and more.

In fact, with this section, we're gonna cover all three of those and put them all into practice these next two weeks of covering native front-end JavaScript.

I want us to hit the ground running as fast as possible so we have the most time possible to dedicate to our bigger and more intensive projects, so a lot of this week will be passive learning with smaller activities so we can jump into a bigger, more meaningful and hands-on project that will tie everything together and already be on our way to building our first fully-functioning web application.

For now, to cover just the bare basics of front-end native JavaScript, we're going to be using javascript.info to familiarize ourselves with the syntax and quirks of super basic JavaScript.

https://javascript.info/first-steps

https://javascript.info/data-types 

Sections we likely won't be using too much:

* 3. The modern mode, "use strict"

* 6. Interaction: alert, prompt, confirm

* 7. Type conversions

* 8. (Data types) WeakMap and WeakSet

Most of this stuff should be second nature for you guys, with just a matter of getting comfortable with the syntax, declaration format, etc. One thing I especially want you  to take a look at is the way you can interact with the HTML DOM with JS. The DOM, which stands for 'document object model', is essentially like an object which contains all the data on your webpage. Thus, we can access any individual element through accessing the DOM object with the universal methods that reference the ```document``` object. Take a look at these two links as well:

https://www.w3schools.com/js/js_htmldom.asp

https://www.w3schools.com/js/js_htmldom_methods.asp

Here is a resource with some of the most basic methods you can take a look at once you're familiarized with JavaScript's fundamental syntax:

https://www.w3schools.com/js/js_htmldom_document.asp

```document``` methods such as ```document.getElementById(id)``` and ```document.createElement()``` will prove to be quite important in native front-end JavaScript development for interacting with the DOM. We'll be using these in our first JS task below.

## Activity
As mentioned previously, this will be one of two fairly small tasks this section - the second will be uploaded later on. You'll again be receiving a blank ```index.html``` with Bootstrap pre-installed on it. Your task this time around is to use the provided ```script.js``` - working ONLY inside ```script.js```, create an HTML page with the following:

* An h2 sub-header - the h1 is already provided for your reference!

* An image

* A list of favorites... can be anything from food, cities, cars - anything!

If you find you have extra time, bonus points if you can:

* Create divs of columns with Bootstrap's grid system using only JS

* Add styling (such as centering all elements) to the page with JS without touching the .html file or making a .css file

An image can be found in the repository with a general idea of what a finished page might look like.

### Tip
* You can use ```console.log(myVariable)``` to view the raw form of anything. It will appear in your browser's dev tools - I recommend Chrome. Press F12 to bring up developer tools, and it should appear in the Console tab.

*****

And that will be it for now! I realize that I'm kind of throwing you out of the nest here, and I totally expect that you'll likely have questions while you're working on it. In fact, I hope you do have questions - as developers you already know you'll run into tasks like this a lot in a working environment, where sometimes you aren't given hardline instructions for how to complete a task... just that the task needs to be 'done'.

However, also by nature of developing, you will always have a wealth of resources at your disposal - you are encouraged to contact me with any questions, consult trusty ol' StackOverflow, or simply Google. 

The task might be pretty head-scratching at first while you acquaint yourself with JavaScript's native functions with the DOM, especially as you'll be working across two different files/languages. But again, if you run into any issues or are stuck at any point, please do reach out to me - I'll be more than happy to help.

Like before, create a repository with your ```index.html``` and ```script.js``` and send me a link!
