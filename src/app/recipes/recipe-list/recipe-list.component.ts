import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Input('recipes') recipeList: Recipe[] = [];
  activeIndex: number = 0;

  changeActiveIndex(index: number): void {
    if (index > -1 && index < this.recipeList.length) {
      this.activeIndex = index;
    }
  }
}
