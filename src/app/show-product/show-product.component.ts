import { Component, OnInit } from '@angular/core';
import { productList } from '../models/product.models';
import { ProductServiceService } from '../services/product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent{
 p? : productList
 constructor(private productService : ProductServiceService,route : ActivatedRoute) {
 this.p = this.productService.findProductById(route.snapshot.params['id'])
 }
}
