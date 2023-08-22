import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class RecipeService {
  private _recipeList: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test recipe',
      'These are the details of the recipe 1.'
    ),
    new Recipe(
      'Test Recipe 2',
      'This is a test recipe 2',
      'These are the details of the recipe 2.'
    ),
  ];
  private activeIndex: number = 0;
  activeIndexUpdateEmitter = new EventEmitter<number>();
  recipeListUpdateEmitter = new EventEmitter<Recipe[]>();

  addRecipe(recipe: Recipe) {
    this._recipeList.push(recipe);
    this.recipeListUpdateEmitter.emit(this._recipeList);
  }

  removeRecipe(recipe: Recipe) {
    this._recipeList = this._recipeList.filter((r) => r === recipe);
    this.recipeListUpdateEmitter.emit(this._recipeList);
  }

  get activeRecipe() {
    return this._recipeList[this.activeIndex];
  }

  set activeRecipe(recipe: Recipe) {
    this.activeIndex = this._recipeList.indexOf(recipe);
    this.activeIndexUpdateEmitter.emit(this.activeIndex);
  }

  get activeRecipeIndex() {
    return this.activeIndex;
  }

  get recipeList() {
    return this._recipeList;
  }
}
