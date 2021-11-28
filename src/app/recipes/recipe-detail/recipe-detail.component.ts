import { Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
recipe:Recipe;
id: number;

  constructor(private shoppingListService: ShoppingListService,
  			  private recipeService: RecipeService,
  			  private route: ActivatedRoute,
  			  private router: Router) { }

  ngOnInit(): void {
  	this.route.params.subscribe(
  		(params: Params) =>{
  			this.id = +params['id'];
  			this.recipe = this.recipeService.getRecipe(this.id);

  	});
  }

  onShoppingClicked(){
     console.log(this.recipe.ingredients);
  	 this.recipe.ingredients.forEach((currentval, i) => {this.shoppingListService.addIngredient(currentval)});
  	 
  }

  onEditRecipe(){
  	this.router.navigate(['edit'],{relativeTo:this.route});
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }

}
