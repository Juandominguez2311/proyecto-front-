import {Product} from "../models/product";

export interface CartModel {
  product_id:number,
  sku:string,
  name: string,
  quantity:number,
  description:string,
  image:string,
  price:number
}

