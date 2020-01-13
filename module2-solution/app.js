(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListController', ShoppingListController)
.factory('ShoppingListFactory', ShoppingListFactory);


ShoppingListController.$inject = ['ShoppingListFactory'];

function ShoppingListController(ShoppingListFactory){
  var ListItem = this;
  
  var shoppingList = ShoppingListFactory();
  var BoughtList = ShoppingListFactory();

   ListItem.name = "";
   ListItem.quantity = "";
   for( var i =0; i<5; i++){
     shoppingList.addItems("Cookies", 10);
   }
   ListItem.items = shoppingList.getItems();
   ListItem.bought_items = BoughtList.getItems();

   ListItem.addItem = function(){
     shoppingList.addItems(ListItem.name, ListItem.quantity);
   }


  ListItem.removeItem = function(itemIndex){
    shoppingList.removeItem(itemIndex);
  }


   ListItem.addboughtItem = function(itemIndex){
     ListItem.name1 = ListItem.items[itemIndex].name;
     ListItem.quantity1 = ListItem.items[itemIndex].quantity;
     BoughtList.addItems(ListItem.name1, ListItem.quantity1);
     shoppingList.removeItem(itemIndex);
   }
};






function ShoppingListService(){
  var service = this;
  var items = [];
  service.addItems = function(itemName, itemQuantity){
    var item = {
      name: itemName,
      quantity: itemQuantity
    };
    items.push(item);
  };

  service.removeItem = function(itemIndex){
    items.splice(itemIndex,1);
  };

  service.getItems = function(){
    return items;
  };
 
}

function ShoppingListFactory(){
  var factory = function(){
    return new ShoppingListService();
  };
  return factory;
}

})();
