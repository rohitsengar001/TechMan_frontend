import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path:'',component:LayoutComponent},
  {path:'contact',component:ContactusComponent},
  {path:'login',component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
