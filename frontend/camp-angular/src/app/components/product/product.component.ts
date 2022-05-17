import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from './../../../models/productResponseModel';
import { Product } from 'src/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  getall = "https://localhost:44339/api/Products/getall"

  products : Product[] = []
 

  constructor(private httpClient: HttpClient) { }



  ngOnInit(): void {
    this.httpClient
      .get<ProductResponseModel>(this.getall)
      .subscribe((result) => {
        this.products = result.data
      })
  }

}
