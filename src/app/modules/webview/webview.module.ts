import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutComponent, ContentComponent],
  imports: [
    CommonModule
  ]
})
export class WebviewModule { }
