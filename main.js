// Query Selector Variables
var

// Global Arrays
var sides = [
  'Fresh Green Beans',
  'Sautéed Zucchini and Squash',
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

// Functions and Event Handlers
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);

function randomFood() {
  var randomSide = sides[getRandomIndex(sides)];
  var randomMain = mains[getRandomINdex(mains)];
  var randomDessert = desserts[getRandomIndex(desserts)]
}

function show(element) {
  element.classList.remove('hidden')
}

function hide(element) {
  element.classList.add('hidden')
}
