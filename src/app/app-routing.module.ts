import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserCreateComponent } from './UserFiles/user-create/user-create.component';
import { UserListComponent } from './UserFiles/user-list/user-list.component';
import {UserDetailsComponent} from './UserFiles/user-details/user-details.component';
import { UserEditComponent } from './UserFiles/user-edit/user-edit.component';
import {UserLoginComponent} from  './UserFiles/user-login/user-login.component';

import { HomeComponent} from './home/home.component';

import { VendorCreateComponent } from './VendorFiles/vendor-create/vendor-create.component';
import { VendorDetialsComponent} from './VendorFiles/vendor-detials/vendor-detials.component';
import {VendorListComponent }from './VendorFiles/vendor-list/vendor-list.component';

import { ProductListComponent }from './ProductFiles/product-list/product-list.component';
import { ProductCreateComponent }from './ProductFiles/product-create/product-create.component';
import { ProductDetailsComponent }from './ProductFiles/product-details/product-details.component';
import {ProductEditComponent} from './ProductFiles/product-edit/product-edit.component';

import {PRListComponent} from './PurchaseRequest/pr-list/pr-list.component';
import {PRCreateComponent} from './PurchaseRequest/pr-create/pr-create.component';
import {PRDetailsComponent} from './PurchaseRequest/pr-details/pr-details.component';
import {PREditComponent} from './PurchaseRequest/pr-edit/pr-edit.component';

import {PRLICreateComponent} from './PRLIFiles/prli-create/prli-create.component';
import {PRLIDetailsComponent} from './PRLIFiles/prli-details/prli-details.component';
import {PRLIEditComponent} from './PRLIFiles/prli-edit/prli-edit.component';
import {PRLIListComponent} from './PRLIFiles/prli-list/prli-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: "user/create", component: UserCreateComponent},
  {path:"user/list", component: UserListComponent},
  {path: "user/details/:Id", component: UserDetailsComponent},
  {path: "user/edit/:Id",component: UserEditComponent},
  {path: "vendor/list",component: VendorListComponent},
  {path: "vendor/details/:Id", component: VendorDetialsComponent},
  {path: "vendor/create",component: VendorCreateComponent},
  {path: "product/list", component: ProductListComponent},
  {path: "product/details/:Id", component: ProductDetailsComponent},
  {path: "product/create", component: ProductCreateComponent},
  {path: "product/edit/:Id", component: ProductEditComponent},
  {path: "purchaseRequest/edit/:Id", component: PREditComponent},
  {path: "purchaseRequest/list", component: PRListComponent},
  {path: "purchaseRequest/create", component: PRCreateComponent},
  {path: "purchaseRequest/details/:Id", component: PRDetailsComponent},
  {path: "lineitems/list", component: PRLIListComponent},
  {path: "lineitems/create", component: PRLICreateComponent},
  {path: "lineitems/edit/:Id", component: PRLIEditComponent},
  {path: "lineitems/details/:Id", component: PRLIDetailsComponent},
  { path: 'user/login', component: UserLoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
export const routingComponent = 
  [ UserCreateComponent, UserListComponent, UserDetailsComponent,
    UserEditComponent, HomeComponent, VendorCreateComponent, 
    VendorDetialsComponent, VendorListComponent, ProductCreateComponent,
    ProductDetailsComponent, ProductListComponent,
    ProductEditComponent, PRDetailsComponent, PRListComponent,
    PRCreateComponent, PREditComponent, PRLICreateComponent,
    PRLIDetailsComponent , PRLIEditComponent, PRLIListComponent,
    UserLoginComponent]