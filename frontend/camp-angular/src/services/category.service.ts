import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryResponseModel } from './../models/categoryResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  getallUrl = "https://localhost:44339/api/Categories/getall"
  
  constructor(private httpClient: HttpClient) { }


  getCategories() : Observable<CategoryResponseModel> {
    return this.httpClient.get<CategoryResponseModel>(this.getallUrl)
  }

}
