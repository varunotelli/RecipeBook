import {Subject} from 'rxjs';

import {Ingredient} from '../shared/ingredient.model';
export class ShoppingListService {
	ingredientAdded = new Subject<Ingredient>();
	private ingredients: Ingredient[] = [
	  	new Ingredient('Apple', 5),
	  	new Ingredient('Orange',3)
  ];

  getIngredients() {
  	return this.ingredients.slice();
  }
  
  addIngredient(ingredient: Ingredient){
  	this.ingredients.push(ingredient);
  	this.ingredientAdded.next(ingredient);
  }


}