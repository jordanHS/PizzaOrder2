//Business logic for pizzas
function Pizza (size, toppings) {
    this.size = size;
    this.toppings = toppings;
}

Pizza.prototype.cost = function() {
   var price = parseInt(this.size);
    console.log(Pizza.price);
   if (this.toppings.length > 3) {
   return parseInt(price) + (parseInt(this.toppings.length) - 3)
   } else {
       return price;
   }
}


//User Interface
$(document).ready(function() {
    $("#order").submit(function(event) {
      event.preventDefault();
        var name = $("input#userName").val();
        var address = $("input#address").val();
        var pizzaSize = $("input:radio[name=pizzaSize]:checked").val();
        var pizzaToppings = [];
        $("input:checkbox[name=topping]:checked").each(function(){
        var toppings = $(this).val();
        pizzaToppings.push(toppings)
        console.log(pizzaToppings)
    })

    var newPizza = new Pizza(pizzaSize, pizzaToppings.length);
    
    $("#message").show().text("Thanks for the order, " + name +  "! Your order cost $" + newPizza.cost() + " &  will be delivered to the following address: " + address + ". See you soon!")
    });
});