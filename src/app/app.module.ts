import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AddproductListComponent } from './addproduct-list/addproduct-list.component';
import { FormsModule } from '@angular/forms';
import { ShowProductComponent } from './show-product/show-product.component';
import { HttpClientModule } from '@angular/common/http';
import { EditProductComponent } from './edit-product/edit-product.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddproductListComponent,
    ShowProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
