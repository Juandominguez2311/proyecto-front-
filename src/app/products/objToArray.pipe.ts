import { Pipe,PipeTransform } from "@angular/core";
import { Product } from "../models/product";

@Pipe({
    name:'ObjToArray'
})

export class ObjToArrayPipe implements PipeTransform{
    transform(object: Product[] = []):any{
        return Object.values(object)
    } 
}