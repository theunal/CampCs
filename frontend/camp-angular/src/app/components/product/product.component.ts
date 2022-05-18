import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { ProductService } from './../../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 

  products : Product[] = []
  load : boolean = false
 

  constructor(private productService : ProductService) { }



  ngOnInit(): void {
   this.getProducts()
  }

  getProducts() {
    this.productService.getProducts().subscribe(result => {
      this.products = result.data
      this.load = true
    })
  }

}
