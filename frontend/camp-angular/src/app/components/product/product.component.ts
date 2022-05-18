import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/models/product';
import { ProductService } from './../../../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  products: Product[] = []
  load: boolean = false
  filterText : string

  constructor(private productService: ProductService, private activedRoute: ActivatedRoute) { }



  ngOnInit(): void {

    this.activedRoute.params.subscribe(params => {

      if (params["categoryId"]) {
        this.getProductsByCategoryId(params["categoryId"])
      }
      this.getProducts()


    })

  }

  getProducts() {
    this.productService.getProducts().subscribe(result => {
      this.products = result.data
      this.load = true
    })
  }

  getProductsByCategoryId(categoryId: number) {
    this.productService.getProductsByCategoryId(categoryId).subscribe(result => {
      this.products = result.data
      this.load = true
    })
  }





}
