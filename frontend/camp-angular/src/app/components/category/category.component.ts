import { Component, OnInit } from '@angular/core';
import { Category } from 'src/models/category';
import { CategoryService } from './../../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  
  categories : Category[] = []
  currentCategory : Category
 
  constructor(private categoryService : CategoryService) { }


  ngOnInit(): void {
   this.getCategories()
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(result => {
      this.categories = result.data
    })
  }


  setCurrentCategory(category : Category) {
    this.currentCategory = category
    console.log(category.categoryName)
  }

  getCurrentCategory(category : Category) {
    if (category == this.currentCategory) {
      return "list-group-item d-flex justify-content-between align-items-center active"
    }else
    return "list-group-item d-flex justify-content-between align-items-center"
  }


}
