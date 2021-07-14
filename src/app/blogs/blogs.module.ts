import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBlogComponent } from './viewBlog/viewBlog.component';
import { HomeBlogComponent } from './homeBlog/homeBlog.component';
import { DisqusComponent } from 'ngx-disqus/lib/disqus.component';
import { DisqusModule } from 'ngx-disqus';


@NgModule({
  imports: [
    CommonModule,
    DisqusModule.forRoot('ngx'),
  ],
  declarations: [
    ViewBlogComponent,
    HomeBlogComponent,
  ],
  exports:[HomeBlogComponent]
})
export class BlogsModule { }
