export interface Product {
    product_id:number,
    sku:string,
    name: string,
    category : Category,
    quantity:number,
    description:string,
    image:string,
    price:number
}

export interface Category{
category_id:number;
description:string;
}