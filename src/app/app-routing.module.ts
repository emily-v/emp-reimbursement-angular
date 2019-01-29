import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EmpHomeComponent } from './components/emp-home/emp-home.component';
import { NewExpComponent } from './components/new-exp/new-exp.component';
import { MgrHomeComponent } from './components/mgr-home/mgr-home.component';
import { DetailsComponent } from './components/details/details.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'emp-home', component: EmpHomeComponent },
  { path: 'new-exp', component: NewExpComponent },
  { path: 'mgr-home', component: MgrHomeComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'success-page', component: SuccessPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
