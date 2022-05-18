import { Product } from "./product";

export class CartItem {

    product : Product
    quantity : number
    
    get totalPrice() {
        return this.product.unitPrice * this.quantity;
    }

    
}