// Query Selector Variables
var loginPage = document.querySelector('.login-page');
var nameBox = document.querySelector('.name-box');
var signInButton = document.querySelector('.login-button');
var mainPage = document.querySelector('.main-page');
var letsCookButton = document.querySelector('.lets-cook');
var side = document.querySelector('.side');
var main = document.querySelector('.main');
var dessert = document.querySelector('.dessert');
var hiddenShouldMake = document.querySelector('.you-should-make');
var cookingPotSection = document.querySelector('.cooking-pot');
var stockFood = document.querySelector('.stock-food');


// Global Arrays
var sides = [
  'Fresh Green Beans',
  'Sauteed Zucchini and Squash',
  'Fruit Salad',
  'Roasted Veggies',
  'Garden Salad',
  'Mashed Potatoes',
  'Caeser Salad',
  'Miso Glazed Carrots',
  'Basmati Rice',
  'Scallion Rice',
  'Pickled Beets',
  'Couscous',
  'Roasted Fingerling Potatoes',
  'Roasted Zucchini',
  'Steamed Broccoli With Cheese'
];

var mains = [
  'Beef Enchiladas',
  'Beer and Brown Sugar Kielbasa & Sauerkraut',
  'Coconut Shrimp with Mango Dipping Sauce',
  'Crab Cakes with Remoulade Sauce',
  'Favorite Meatloaf',
  'Frito Pie',
  "General Tso's Chicken",
  'Greek Lamb Gyros with Tzatziki Sauce',
  'Spaghetti and Meatballs',
  'Pineapple Chicken',
  'Shakshuka',
  'Thai Yellow Curry',
  'Bibimbap',
  'Sheet Pan Fajitas',
  'Margarita Pizza'
];

var desserts = [
  'Tiramisu',
  'Chocolate Mousse',
  'Angel Food Cake',
  'Rocky-Road Ice-Cream',
  'Roasted Strawberry Crumble',
  'Apple and Butterscotch Pie',
  'Almond and Date Cake',
  'Apple Cinnamon Custard Cake',
  'Apple Pie',
  'Lemon Meringue Pie',
  'Black Forest Cake',
  'Banana Bread',
  'Peach Cobbler',
  'Cheesecake',
  'Eclairs'
];

// Event Listeners
letsCookButton.addEventListener('click', youShouldMake);
signInButton.addEventListener('click', login);

// Functions
function getRandomDish(array) {
  return Math.floor(Math.random() * array.length);
};

function randomFood() {
  var randomSide = sides[getRandomDish(sides)];
  var randomMain = mains[getRandomDish(mains)];
  var randomDessert = desserts[getRandomDish(desserts)];
  side.value = randomSide;
  main.value = randomMain;
  dessert.value = randomDessert
  if (side.checked) {
    return stockFood.innerText = side.value;
  } else if (main.checked) {
    return stockFood.innerText = main.value;
  } else if (dessert.checked) {
    return stockFood.innerHTML = dessert.value;
  }
};

function show(element) {
  element.classList.remove('hidden')
};

function hide(element) {
  element.classList.add('hidden')
};

function changePot() {
  hide(cookingPotSection);
  show(hiddenShouldMake)
};

function login() {
  hide(loginPage);
  show(mainPage);
}

// Event Handlers
function youShouldMake() {
  changePot();
  randomFood();
}
