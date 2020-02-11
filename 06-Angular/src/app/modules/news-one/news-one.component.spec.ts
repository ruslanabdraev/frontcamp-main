import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Component} from '@angular/core'
import { NewsOneComponent } from './news-one.component';


@Component({
  selector: 'app-news-edit',
  template: '<p>Mock News Edit</p>'
})
class MockNewsEditComponent {}

describe('NewsOneComponent', () => {
  let component: NewsOneComponent;
  let fixture: ComponentFixture<NewsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsOneComponent, MockNewsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
    
  //   //expect(component).toBeTruthy();
  // });
});
