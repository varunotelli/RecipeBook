import {EventEmitter} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService{
	recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
	private recipes: Recipe[] = [ new
	Recipe("A test recipe", "This is a test",
		"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",
		[
			new Ingredient("Meat",1),
			new Ingredient("French Fries", 20)
		]),
	new
	Recipe(
		"Another test recipe", 
		"This is a test",
		"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",
		[
			new Ingredient("Sugar", 20),
			new Ingredient("Salt",40)
		])
	]; 

	getRecipes(){
		return this.recipes.slice();
	}

	getRecipe(id: number){
		return this.recipes[id];
	}
}

