import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';

import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service"

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[];
  private igChangeSub: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientAdded.subscribe((ingredient:Ingredient) => {this.ingredients.push(ingredient)});
  }

  ngOnDestroy(): void{
    this.igChangeSub.unsubscribe();
  }

}
