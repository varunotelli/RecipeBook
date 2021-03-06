import {Subject} from 'rxjs';

import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';

export class RecipeService{
	recipeSelected = new Subject<Recipe>();
	recipesChanged = new Subject<Recipe[]>();
	private recipes: Recipe[] = [];
	// private recipes: Recipe[] = [ new
	// Recipe("A test recipe", "This is a test",
	// 	"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",
	// 	[
	// 		new Ingredient("Meat",1),
	// 		new Ingredient("French Fries", 20)
	// 	]),
	// new
	// Recipe(
	// 	"Another test recipe", 
	// 	"This is a test",
	// 	"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg",
	// 	[
	// 		new Ingredient("Sugar", 20),
	// 		new Ingredient("Salt",40)
	// 	])
	// ];

	setRecipes(recipes: Recipe[]){
		this.recipes = recipes;
		this.recipesChanged.next(this.recipes.slice());
	}

	getRecipes(){
		return this.recipes.slice();
	}

	getRecipe(id: number){
		return this.recipes[id];
	}

	addRecipe(recipe:Recipe){
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes);
	}

	updateRecipe(id: number, recipe:Recipe){
		this.recipes[id] = recipe
		this.recipesChanged.next(this.recipes);
	}

	deleteRecipe(id: number){
		this.recipes.splice(id,1);
		this.recipesChanged.next(this.recipes);
	}
}

