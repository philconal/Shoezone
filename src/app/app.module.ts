import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {AdminComponent} from './components/admin/admin.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {BranchComponent} from './components/branch/branch.component';
import {ProductComponent} from './components/product/product.component';
import {NgxPaginationModule} from "ngx-pagination";
import {HttpClientModule} from "@angular/common/http";
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {BrandModelComponent} from './components/branch/brand-model/brand-model.component';
import {RemoveComponent} from './components/branch/brand-model/remove/remove.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    DashboardComponent,
    BranchComponent,
    ProductComponent,
    BrandModelComponent,
    RemoveComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule, NgbPaginationModule, NgbAlertModule, NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
