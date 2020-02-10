import {Component} from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';

@Component({
  selector: 'app-news-list',
  template: '<p>Mock News list</p>'
})
class MockNewsListComponent {}

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsComponent, MockNewsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
