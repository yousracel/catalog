import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./product/products/products.component";
import {CustomersComponent} from "./customer/customers/customers.component";
import {LoginComponent} from "./tools/login/login.component";
import {AdminTemplateComponent} from "./tools/admin-template/admin-template.component";
import {AuthenticationGuard} from "./tools/guards/authentication.guard";
import {NewProductComponent} from "./product/new-product/new-product.component";
import {EditProductComponent} from "./product/edit-product/edit-product.component";
import {NewCustomerComponent} from "./customer/new-customer/new-customer.component";
import {EditCustomerComponent} from "./customer/edit-customer/edit-customer.component";
import {BillsComponent} from "./bill/bills/bills.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "", component: LoginComponent},
  {path: "admin", component: AdminTemplateComponent,canActivate:[AuthenticationGuard],children:[
      {path: "products", component: ProductsComponent},
      {path: "customers", component: CustomersComponent},
      {path: "newProduct", component: NewProductComponent},
      {path: "editProduct/:id", component: EditProductComponent},
      {path : "newCustomer", component : NewCustomerComponent},
      {path : "editCustomer/:id", component : EditCustomerComponent},
      {path : "bills", component : BillsComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
