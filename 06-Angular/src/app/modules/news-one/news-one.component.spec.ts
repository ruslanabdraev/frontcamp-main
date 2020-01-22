import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsOneComponent } from './news-one.component';

describe('NewsOneComponent', () => {
  let component: NewsOneComponent;
  let fixture: ComponentFixture<NewsOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
