/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
var tableBodyNode = table.querySelector('tbody');

table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tableRowNode = tableBodyNode.querySelectorAll('tr');
  if(tableRowNode.length > 0){
    for (var i = 0; i <= cart.items.length; i++){
      tableRowNode[i].remove();
    }
  }
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  for(var i = 0; i < cart.items.length; i++){
    var newTableRow = document.createElement('tr');
    newTableRow.setAttribute('id', `${cart.items[i].product}`)
    tableBodyNode.appendChild(newTableRow);

    var deleteDataCell = document.createElement('td');
    deleteDataCell.textContent = 'X';
    newTableRow.appendChild(deleteDataCell);

    var quantityDataCell = document.createElement('td');
    quantityDataCell.innerText = `${cart.items[i].quantity}`;
    newTableRow.appendChild(quantityDataCell);

    var nameDataCell = document.createElement('td');
    nameDataCell.innerText = `${cart.items[i].product}`;
    newTableRow.appendChild(nameDataCell);
  }
}
// TODO: Create a TR
// TODO: Create a TD for the delete link, quantity,  and the item
// TODO: Add the TR to the TBODY and each of the TD's to the TR


function removeItemFromCart(event) {
  if(event.target.textContent === 'X'){
    var rowDeletedID = document.getElementById(event.target.parentElement.id);
    var nameNonString = rowDeletedID.lastChild.textContent;
    cart.removeItem(`${nameNonString}`);
    cart.saveToLocalStorage();
    renderCart();
  }
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
