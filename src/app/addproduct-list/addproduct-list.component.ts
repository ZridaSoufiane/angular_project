import { Component } from '@angular/core';
import {productList} from "../models/product.models";
import { ProductServiceService } from '../services/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct-list',
  templateUrl: './addproduct-list.component.html',
  styleUrls: ['./addproduct-list.component.css']
})
export class AddproductListComponent {
  p : productList = new productList()
  constructor(private prodctService: ProductServiceService,private router: Router) {
  }
  addProduct()
  {
  this.prodctService.addProduct(this.p!);
  this.router.navigate(['/products']);
  }
}
