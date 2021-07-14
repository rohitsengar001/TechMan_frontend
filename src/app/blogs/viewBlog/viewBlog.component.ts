import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';


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
    /**
     * @param state is a key of object passed in url e.g: {state:data}
     */
    this.router.getCurrentNavigation().extras.state
  }

  ngOnInit() {
    //iframe rules for sanitizing
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    /**
    *@param history to catch the attched params
    */
    this.blogObj = history.state;
    console.log(this.blogObj);
    this.pageId=this.blogObj.id
  }
}

