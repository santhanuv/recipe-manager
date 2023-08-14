import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  recipeList: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test recipe',
      'These are the details of the recipe.'
    ),
    new Recipe(
      'Test Recipe 2',
      'This is a test recipe 2',
      'These are the details of the recipe.'
    ),
  ];
}
