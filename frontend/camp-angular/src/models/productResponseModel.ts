// apiden gelen tüm data >> data = [], success = true,false, message = "gelen mesaj"

import { Product } from "./product";
import { ResponseModel } from './responseModel';



export interface ProductResponseModel extends ResponseModel{
    data : Product[]

}