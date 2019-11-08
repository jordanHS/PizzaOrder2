//Business Logic for Order
function Order() {
    this.pizzas = [],
    this. drinks = [],
    this.PizzaId = 0,
    this.drinkId = 0
}

Order.prototype.addPizza = function(pizza) {
    pizza.id=this.assignId();
    this.pizzas.push(pizza);
}

Order.prototype.assignId - function() {
    this.pizzaId += 1;
    return this.pizzaId;
}
// Order.prototype.addDrink = function(drink) {
//     drink.id=this.assignId();
//     this.drinks.push(drink);
// }

//Business logic for pizzas

