

//Business logic for pizzas
function Pizza (size, toppings) {
    this.size = size;
    this.toppings = toppings;
}

Pizza.prototype.cost = function() {
   var price = parseInt(this.size);
   if (toppings.length > 3) {
   return price + (parseInt(toppings.length) - 3)
   } else {
       return price;
   }
}


//User Interface
var pizzaOrder = new pizzaOrder();
   

