import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/services/category.service';
import { ProductService } from 'src/services/product.service';
import { Category } from './../../../models/category';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  // <form></form>
  productAddForm: FormGroup
  categories: Category[] = []

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.createProductAddForm()
    // this.getCategories()
  }


  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ["", Validators.required],
      categoryId: ["", Validators.required],
      unitPrice: ["", Validators.required],
      unitsInStock: ["", Validators.required]
    })
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(result => {
      this.categories = result.data
    })
  }




  productAdd() { // object.assing ile ilk değerini boş bir obje verdik ve formdan gelen value yi verdik

    if (this.productAddForm.valid) {
      let product = Object.assign({}, this.productAddForm.value)
      this.productService.productAdd(product).subscribe(response => {
        console.log(response)
        this.toastrService.success(response.message, product.productName)
      }, responseError => {
        if(responseError.error.Errors.length > 0) {
          for (let i = 0; i < responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage)
          }
        }
        
        
      })

    } else {
      this.toastrService.error("Formda Hata Var")
    }
  }


}


