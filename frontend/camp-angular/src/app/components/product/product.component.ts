import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  products: Product[] = []
  load: boolean = false
  filterText : string

  constructor(
    private productService : ProductService, 
    private activedRoute : ActivatedRoute,
    private toastrService : ToastrService, 
    private cartService : CartService
    ) { }



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


  addToCart(product : Product) {
    this.toastrService.success("Sepete Eklendi", product.productName)
    this.cartService.addToCart(product)
  }

   




}
