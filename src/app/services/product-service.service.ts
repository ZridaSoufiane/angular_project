import { Injectable } from '@angular/core';
import {productList} from "../models/product.models";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
product:productList[];
  constructor() {
    this.product=[
      {
        id:1,name:"taha",price:200,dateCreation:new Date()
      },
      {
        id:2,name:"zrida",price:300,dateCreation:new Date()
      },
      {
        id:3,name:"toto",price:500,dateCreation:new Date()
      },

    ]
  }
  getProducts()
  {
    return this.product
  }
  addProduct(p : productList)
  {
    this.product.push(p)
  }
  deleteProduct(p : productList)
  {
    const index = this.product.indexOf(p,0)
    this.product.splice(index,1)
  }
  findProductById(id:number)
  {
    return this.product.find(p => p.id == id);
  }
}
