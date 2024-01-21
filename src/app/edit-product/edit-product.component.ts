import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productList } from '../models/product.models';
import { ProductServiceService } from '../services/product-service.service';
import { ProductService } from '../backend/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  p? : productList
  constructor(private productService : ProductServiceService,route : ActivatedRoute) {
  this.p = this.productService.findProductById(route.snapshot.params['id'])

  /*updateProduct() {
    // Utilisez le service pour mettre à jour le produit
    this.productService.updateProduct(this.product);
  }*/
}
}
