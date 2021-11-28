import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  //@ViewChild('nameInput') nameInputRef:ElementRef;
  //@ViewChild('amountInput') amountInputRef:ElementRef;
  @ViewChild('f') slForm : NgForm;
  subscription: Subscription;
  editMode = false;
  edittedItemIndex: number;
  edittedItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.edittedItemIndex = index;
        this.editMode = true;
        this.edittedItem = this.shoppingListService.getIngreditent(index);
        this.slForm.setValue({
          name: this.edittedItem.name,
          amount: this.edittedItem.amount
        });
      }
      );
  }

  onAddClicked(form: NgForm){
    const value = form.value;
    //console.log('add item clicked');
    const ingredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.edittedItemIndex, ingredient);
      console.log('update item clicked');
    }
    else{
      this.shoppingListService.addIngredient(ingredient);
      console.log('add item clicked');
    }
    this.editMode = false;
    form.reset();
  }

  onClear(){
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete(){
    this.shoppingListService.deleteIngredient(this.edittedItemIndex);
    this.editMode = false;
    this.slForm.reset();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();

  }

}
