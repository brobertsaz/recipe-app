import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Bobs Favorite',
      'Best Recipe Ever',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/1/0/\W' +
      'U0202_chili_s3x4.jpg.rend.hgtvcom.826.620.suffix/1486076474733.jpeg'),
    new Recipe(
      'New Recipe',
      'Looks Pretty Good',
      'https://www.bbcgoodfood.com/sites/default/files/categories/categories-image/2013/05/frying-pan-pizza-easy-recipe-collection.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

}
