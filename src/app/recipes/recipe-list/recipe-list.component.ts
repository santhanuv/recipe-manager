import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Input('recipes') recipeList: Recipe[] = [];
  @Input() activeIndex: number = 0;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    // this.activeIndex = this.recipeService.activeRecipeIndex;
  }

  changeActiveRecipe(recipe: Recipe) {
    this.recipeService.activeRecipe = recipe;
  }
}
