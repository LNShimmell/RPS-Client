import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component'
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule, MatSortModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SortPipe } from './Utility/sort.pipe';
import { VendorListComponent } from './VendorFiles/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './VendorFiles/vendor-create/vendor-create.component';
import { VendorDetialsComponent } from './VendorFiles/vendor-detials/vendor-detials.component';
import { ProductListComponent } from './ProductFiles/product-list/product-list.component';
import { ProductDetailsComponent } from './ProductFiles/product-details/product-details.component';
import { ProductCreateComponent } from './ProductFiles/product-create/product-create.component';
import { ProductEditComponent } from './ProductFiles/product-edit/product-edit.component';
import { PRListComponent } from './PurchaseRequest/pr-list/pr-list.component';
import { PREditComponent } from './PurchaseRequest/pr-edit/pr-edit.component';
import { PRDetailsComponent } from './PurchaseRequest/pr-details/pr-details.component';
import { PRCreateComponent } from './PurchaseRequest/pr-create/pr-create.component';
import { PRLIEditComponent } from './PRLIFiles/prli-edit/prli-edit.component';
import { PRLIDetailsComponent } from './PRLIFiles/prli-details/prli-details.component';
import { PRLIListComponent } from './PRLIFiles/prli-list/prli-list.component';
import { PRLICreateComponent } from './PRLIFiles/prli-create/prli-create.component';
import { UserLoginComponent } from './UserFiles/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
   routingComponent,
   NavBarComponent,
   SortPipe,
   ProductListComponent,
   ProductDetailsComponent,
   ProductCreateComponent,
   ProductEditComponent,
   PRListComponent,
   PREditComponent,
   PRDetailsComponent,
   PRCreateComponent,
   PRLIEditComponent,
   PRLIDetailsComponent,
   PRLIListComponent,
   PRLICreateComponent,
   UserLoginComponent,
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
