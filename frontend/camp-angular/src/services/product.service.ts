import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/models/listResponseModel';
import { Product } from 'src/models/product';
import { ResponseModel } from './../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getallUrl = "https://localhost:44339/api/Products/"

  constructor(private httpClient: HttpClient) { }


  getProducts() : Observable<ListResponseModel<Product>> {
    let newPath = this.getallUrl + "getall";
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }

  getProductsByCategoryId(categoryId : number) : Observable<ListResponseModel<Product>> {

    let newPath = this.getallUrl + "getAllByCategoryId?categoryId=" + categoryId;
    return this.httpClient.get<ListResponseModel<Product>>(newPath)

  }


  productAdd(product : Product) : Observable<ResponseModel> {
    let newPath = this.getallUrl + "add";
    return this.httpClient.post<ResponseModel>(newPath, product)
  }


}

