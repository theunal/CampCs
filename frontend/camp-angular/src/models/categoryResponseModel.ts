// apiden gelen tüm data >> data = [], success = true,false, message = "gelen mesaj"

import { ResponseModel } from './responseModel';
import { Category } from './category';



export interface CategoryResponseModel extends ResponseModel{
    data : Category[]
}