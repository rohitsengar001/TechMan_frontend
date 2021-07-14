import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeBlogComponent } from './blogs/homeBlog/homeBlog.component';
import { ViewBlogComponent } from './blogs/viewBlog/viewBlog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FaqComponent } from './faq/faq.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:'home',component:LayoutComponent},
  {path:'contact',component:ContactusComponent},
  {path:'login',component:LoginPageComponent},
  {path:'faq',component:FaqComponent},
  {path:'view',component:ViewBlogComponent},
  {path:'blog',component:HomeBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
