import { Injectable } from '@angular/core';
import { CartItem } from 'src/models/cartItem';
import { Product } from 'src/models/product';
import { CartItems } from './../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  addToCart(product: Product) {

    let item = CartItems.find(p => p.product.productId == product.productId);

    if (item) {
      item.quantity++
    } else {
      let cartItem = new CartItem()
      cartItem.product = product
      cartItem.quantity = 1

      CartItems.push(cartItem)
    }
  }


  removeFromCart(product: Product) {

    let item = CartItems.find(p => p.product.productId == product.productId)

    if (item.quantity > 1) {
      item.quantity--
    } else {
      CartItems.splice(CartItems.indexOf(item), 1)
    }
  }


  list() : CartItem[] {
    return CartItems;
  }

}












  




