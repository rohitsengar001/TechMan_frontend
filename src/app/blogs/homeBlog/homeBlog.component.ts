import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkActive } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-homeBlog',
  templateUrl: './homeBlog.component.html',
  styleUrls: ['./homeBlog.component.css']
})
export class HomeBlogComponent implements OnInit {
  blogData: any
  obj
  // datatrf:any
  constructor(private blogService: BlogService,private router:Router) { }

  ngOnInit() {
    this.blogService.getAll().subscribe(data => {

      this.blogData = data;
      console.log(data)
    }
    )
  }
  setData(data){
    this.obj=JSON.stringify(data);
    this.router.navigateByUrl('/view',{state:data});

    console.log(this.obj);
  }

}
