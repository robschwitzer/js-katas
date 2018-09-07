// kata to apply discount to inventory

let inventory = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
  ];

const inventoryList = function (items, discount) {
  discount /= 100
  for (let i of items) {
    i.price -= i.price *= discount
  }
  return items
}

console.log(inventoryList(shoppingList1, 15))