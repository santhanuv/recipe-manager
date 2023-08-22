import { Component } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent {
  recipeList: Recipe[] = [];
  activeIndex: number = 0;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeList = this.recipeService.recipeList;
    this.activeIndex = this.recipeService.activeRecipeIndex;
    this.recipeService.activeIndexUpdateEmitter.subscribe(
      (value) => (this.activeIndex = value)
    );
    this.recipeService.recipeListUpdateEmitter.subscribe(
      (value) => (this.recipeList = value)
    );
  }
}
