import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryResponseModel } from './../../../models/categoryResponseModel';
import { Category } from 'src/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  getallUrl = "https://localhost:44339/api/Categories/getall"

  categories : Category[] = []

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.httpClient
      .get<CategoryResponseModel>(this.getallUrl)
      .subscribe((result) => {
        this.categories = result.data
      })
  }

}
