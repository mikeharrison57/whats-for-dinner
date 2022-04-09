// Query Selector Variables
var letsCookButton = document.querySelector('.lets-cook');
var side = document.querySelector('.side');
var main = document.querySelector('.main');
var dessert = document.querySelector('.dessert');
var hiddenShouldMake = document.querySelector('.you-should-make');
var cookingPotSection = document.querySelector('.cooking-pot');
var pot = document.querySelector('svg');

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

// Functions and Event Handlers
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
    return hiddenShouldMake.innerHTML +=
    `<h1>${side.value}<h1>`
  } else if (main.checked) {
    return hiddenShouldMake.innerHTML +=
    `<h1>${main.value}<h1>`
  } else if (dessert.checked) {
    return hiddenShouldMake.innerHTML +=
    `<h1>${dessert.value}<h1>`
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

function youShouldMake() {
  changePot();
  randomFood();
  // hiddenShouldMake.innerHTML +=
  // `<h1>${dessert.value}<h1>`
}



// need random sides, mains, and desserts to display from button
// need let's cook button to display these results in pot box
// pot needs to disapper and the other html needs to appear
