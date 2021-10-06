import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({ 
	selector: 'app-recipe-list', 
	templateUrl:'./recipe-list.component.html', 
	styleUrls: ['./recipe-list.component.css'] 
})
export class RecipeListComponent implements OnInit { 
	recipes: Recipe[] = [ new
	Recipe("A test recipe", "This is a test",
		"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"),
	new
	Recipe("Another test recipe", "This is a test",
		"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg")
	]; 
	@Output() recipeItemSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
	constructor() { }

	ngOnInit(): void {
	}

	onItemSelected(recipe: Recipe){
		console.log('recipe list selected');
		this.recipeItemSelected.emit(recipe);
	}

}
