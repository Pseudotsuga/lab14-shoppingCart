'use strict';
var myStorage = window.localStorage;


// Cart constructor.
var Cart = function(items) {
  // this.items is an array of CartItem instances.
  this.items = items;
};


Cart.prototype.addItem = function(product, quantity) {
  var newCartItem = new CartItem(product, quantity);
  this.items.push(newCartItem);
};


Cart.prototype.saveToLocalStorage = function() {
  var jsonString = JSON.stringify(this.items);
  myStorage.setItem('cart', jsonString);
};

// TODO: Fill in this instance method to remove one item from the cart.
// Note: You will have to decide what kind of parameter to pass in here!
Cart.prototype.removeItem = function(object) {
  var cartDataString = myStorage.getItem('cart');
  var cartDataJson = JSON.parse(cartDataString);
  var newArray = cartDataJson.filter(function(item){
    return item.product !== object;
  });
  this.items = [];
  for(var i = 0; i < newArray.length; i++){
    this.items.push(new CartItem(newArray[i].product,newArray[i].quantity));
  }
};

var CartItem = function(product, quantity) {
  this.product = product;
  this.quantity = quantity;
};

// Product constructor.
var Product = function(filePath, name) {
  this.filePath = filePath;
  this.name = name;
  Product.allProducts.push(this);
};

Product.allProducts = [];

function generateCatalog() {
  new Product('assets/bag.jpg', 'Bag');
  new Product('assets/banana.jpg', 'Banana');
  new Product('assets/bathroom.jpg', 'Bathroom');
  new Product('assets/boots.jpg', 'Boots');
  new Product('assets/breakfast.jpg', 'Breakfast');
  new Product('assets/bubblegum.jpg', 'Bubblegum');
  new Product('assets/chair.jpg', 'Chair');
  new Product('assets/cthulhu.jpg', 'Cthulhu');
  new Product('assets/dog-duck.jpg', 'Dog-Duck');
  new Product('assets/dragon.jpg', 'Dragon');
  new Product('assets/pen.jpg', 'Pen');
  new Product('assets/pet-sweep.jpg', 'Pet Sweep');
  new Product('assets/scissors.jpg', 'Scissors');
  new Product('assets/shark.jpg', 'Shark');
  new Product('assets/sweep.png', 'Sweep');
  new Product('assets/tauntaun.jpg', 'Taun-Taun');
  new Product('assets/unicorn.jpg', 'Unicorn');
  new Product('assets/usb.gif', 'USB');
  new Product('assets/water-can.jpg', 'Water Can');
  new Product('assets/wine-glass.jpg', 'Wine Glass');
}

// Initialize the app by creating the big list of products with images and names
generateCatalog();

// start running code

