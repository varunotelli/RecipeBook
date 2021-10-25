import {EventEmitter} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
export class ShoppingListService {
	ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
	private ingredients: Ingredient[] = [
	  	new Ingredient('Apple', 5),
	  	new Ingredient('Orange',3)
  ];

  getIngredients() {
  	return this.ingredients.slice();
  }
  
  addIngredient(ingredient: Ingredient){
  	this.ingredients.push(ingredient);
  	this.ingredientAdded.emit(ingredient);
  }


}