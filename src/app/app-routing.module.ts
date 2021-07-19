import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {AdminComponent} from "./components/admin/admin.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {BranchComponent} from "./components/branch/branch.component";
import {ProductComponent} from "./components/product/product.component";

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login-component', component: LoginComponent},
  {
    path: 'admin', component: AdminComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'branch', component: BranchComponent},
      {path: 'product', component: ProductComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
