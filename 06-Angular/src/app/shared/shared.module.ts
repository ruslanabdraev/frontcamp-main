import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsItemComponent } from './components/news-item/news-item.component';
import { NewsEditComponent } from './components/news-edit/news-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    NewsListComponent,
    NewsItemComponent,
    NewsEditComponent  
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    NewsListComponent,
    NewsItemComponent,
    NewsEditComponent
  ]
})
export class SharedModule { }
