import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-viewBlog',
  templateUrl: './viewBlog.component.html',
  styleUrls: ['./viewBlog.component.scss']
})
export class ViewBlogComponent implements OnInit {
  blogObj: any
  obj: any
  pageId
  url="https://www.youtube.com"
  urlSafe:SafeResourceUrl
  constructor(private router: Router,private sanitizer:DomSanitizer) {

    this.router.getCurrentNavigation().extras.state
  }

  ngOnInit() {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

    // this.router.queryParams.subscribe(params=>{
    //   this.blogObj=(params)
    //   console.log(this.blogObj);
    this.blogObj = history.state;
    console.log(this.blogObj);
    this.pageId=this.blogObj.id

  }
  // this.blogObj=this.router.snapshot.paramMap.get('data')
  // this.obj=JSON.parse(this.blogObj)
}

