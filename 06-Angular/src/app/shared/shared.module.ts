import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsItemComponent } from './components/news-item/news-item.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    NewsListComponent,
    NewsItemComponent  
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    NewsListComponent,
    NewsItemComponent
  ]
})
export class SharedModule { }
