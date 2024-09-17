import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { LoginComponent } from './pages/login/login.component';
import { SendCodeComponent } from './pages/send-code/send-code.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path:'', component:LandingPageComponent },
  { path:'login', component:LoginComponent },
  { path:'send-code', component:SendCodeComponent },
  { path:'dashboard', component:DashboardComponent },
  { path:'forget-password', component:ForgetPasswordComponent },
  { path:'**', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
