import { Component, OnInit } from '@angular/core';
import {productList} from "../models/product.models";
import { ProductServiceService } from '../services/product-service.service';
import { ProductService } from '../backend/product.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
product?:productList[]
p?: productList = new productList();
  constructor(private productService : ProductServiceService,private apiService : ProductService) {
  this.product = productService.getProducts();
  }
  ngOnInit(): void {
    this.apiService.getUsers().subscribe(data => {
      console.log(data);
    });
  }
  addProduct()
  {
  this.productService.addProduct(this.p!);
  }
  deleteProduct(p:productList)
  {
    if(confirm("Are you sure ?"))
    this.productService.deleteProduct(p)
    return
  }

}
