import {Subject} from 'rxjs';

import {Ingredient} from '../shared/ingredient.model';
export class ShoppingListService {
	ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
	private ingredients: Ingredient[] = [
	  	new Ingredient('Apple', 5),
	  	new Ingredient('Orange',3)
  ];

  getIngredients() {
  	return this.ingredients.slice();
  }

  getIngreditent(index: number){
    return this.ingredients[index];
  }
  
  addIngredient(ingredient: Ingredient){
  	this.ingredients.push(ingredient);
  	this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, ingredient: Ingredient){
     this.ingredients[index] = ingredient;
     this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }


}