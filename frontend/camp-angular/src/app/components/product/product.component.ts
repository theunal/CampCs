import { Component, OnInit } from '@angular/core';
import { Product } from './../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product1 : Product = {productId:1, productName:'Bardak 1', categoryId:1, unitsInStock: 5454, unitPrice:7}
  product2 : Product = {productId:2, productName:'Bardak 2', categoryId:1, unitsInStock: 345, unitPrice:2345}
  product3 : Product = {productId:3, productName:'Bardak 3', categoryId:1, unitsInStock: 455, unitPrice:544}
  product4 : Product = {productId:4, productName:'Bardak 4', categoryId:1, unitsInStock: 3245355, unitPrice:15}
  product5 : Product = {productId:5, productName:'Bardak 5', categoryId:1, unitsInStock: 4354355, unitPrice:53}

  products : Product[] = [this.product1,this.product2,this.product3,this.product4,this.product5]

  constructor() { }

  ngOnInit(): void {
  }

}
