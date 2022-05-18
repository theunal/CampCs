import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/models/listResponseModel';
import { Product } from 'src/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getallUrl = "https://localhost:44339/api/Products/getall"

  constructor(private httpClient: HttpClient) { }


  getProducts() : Observable<ListResponseModel<Product>> {
    return this.httpClient.get<ListResponseModel<Product>>(this.getallUrl)
  }




}

