import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe | null = null;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.selectedRecipe = this.recipeService.activeRecipe;
    this.recipeService.activeIndexUpdateEmitter.subscribe(
      (_) => (this.selectedRecipe = this.recipeService.activeRecipe)
    );
  }
}
