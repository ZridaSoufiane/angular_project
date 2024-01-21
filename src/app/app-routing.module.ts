import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {AddproductListComponent} from "./addproduct-list/addproduct-list.component";
import { ShowProductComponent } from './show-product/show-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
const routes: Routes = [
  {
    path:"products",component:ProductListComponent

  },
   {
      path:"addProduct", component : AddproductListComponent
    },
    {
      path:"ShowProdct/:id", component : ShowProductComponent
    },
    {
      path:"editProduct/:id", component : EditProductComponent
    },
    
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
