# What's for Dinner?

## Context and Features

- The “What’s For Dinner” project was an opportunity for me and my fellow classmates in the 2203 Cohort of Turing’s Front End Program to showcase our current abilities building an application using a provided comp as a reference. The comp included many HTML and CSS features including but not limited to: a background image, assorted colors, a cookpot image, a set of radio buttons, and particular formatting. The Minimum Viable Product (MVP) features included: selecting a dish option from three different radio buttons (Side, Main Dish, and Dessert), and being able to see random dishes appear in place of the cookpot image upon clicking the “Let’s Cook” button below said radio buttons.

- I was successful in building out the comp, and making it look nearly identical to the provided comp. I used my new skills in HTML and CSS to do so. I was also able to get the MVP functionality working as expected, and added an additional feature. When visiting my version of the “What’s For Dinner” application the user is met with a login screen. This login screen includes an input for a user’s name, and a “Signin” button. Upon clicking this button, the user will be taken to the main page of the application, and a welcome message including the user’s name will be displayed on the bottom of the page.

## Illustrations

#### Provided Comp Images

<img width="939" alt="comp_1" src="https://user-images.githubusercontent.com/95496577/162632814-ec6392d0-19b7-46e8-a99f-601eb03c789d.png">

<img width="937" alt="comp_2" src="https://user-images.githubusercontent.com/95496577/162632819-33e1a657-28f2-4f62-aa1e-1c5f0373fb0f.png">

#### My Application Images

<img width="1440" alt="Screen Shot 2022-04-10 at 11 57 59 AM" src="https://user-images.githubusercontent.com/95496577/162632928-f5da02a8-8ac5-46d7-ae95-d01db28e5068.png">

## Lessons Learned

- This project really put my HTML, CSS, and JavasScript abilities to the test. One of the most challenging aspects was attempting to get all of the HTML elements and CSS rules matching the provided comp as closely as possible. This required the use of proper semantic organization of the HTML, making use of  `<section>` and `<div>` elements, and a lot of proper flex-box manipulation within the CSS rules. I was able to learn a few different ways to go about properly organizing my HTML and CSS, and make sure that certain sections were able to be “hidden”  or visible when I wanted them to be. This was of the utmost importance for all of the JavaScript functionality, as it required the hiding and showing of my entire page when the login screen was displayed, and the, “You should make” section prior to selecting a random dish. I utilized some functions that targeted the class list so that I could remove or add “hidden”  to certain elements when I wanted to.

- Another important aspect of the MVP functionality was making sure that the values of the radio buttons were properly assigned to the values of the random side, main dish, and dessert arrays. This in and of itself wasn’t as challenging as I expected, but making sure that they would only output these values after being checked was a bit more challenging. I ended up using a large conditional for this that included one `if ` statement, and two `else if` statements. I did query select the radio button elements individually, but later realized that query selecting all of the radio buttons and using a loop to iterate through them might also be a viable technique. Lastly, my login page required an additional HTML section that would show before any of the others. I made further use of my hide and show functions, but also had to add the hidden keyword to some other HTML sections. My final function involved capturing the input value from my “NAME” box and displaying it on the bottom of the webpage with a welcome message incorporating the user’s name. The event listener for my, “Sign-In” button made it so that when the user clicks it the user’s name is displayed at the bottom of the page with the welcome message, “Welcome [user]! What’s for dinner?”     

### Technologies
- HTML
- CSS
- JavaScript

### Contributors

- [Michael Harrison](https://github.com/mikeharrison57)

### Project Specs

- The spec for this project can be found [here](https://frontend.turing.io/projects/module-1/dinner.html)
