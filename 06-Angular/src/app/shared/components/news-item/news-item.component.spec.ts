import { CommonModule } from '@angular/common'
import { RouterTestingModule } from '@angular/router/testing'
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemComponent } from './news-item.component';

describe('NewsItemComponent', () => {
  let component: NewsItemComponent;
  let fixture: ComponentFixture<NewsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ CommonModule, RouterTestingModule ],
      declarations: [ NewsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemComponent);
    component = fixture.componentInstance;
    component.id = "0";
    component.title = "TitleTest1";
    component.author = "AuthorTest1";
    component.description = "DescriptionTest1";
    component.url = "UrlTest1";
    component.urlToImage = "UrlToImageTest1"

    spyOn(component.onNewsDelete, 'emit').and.callThrough();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should define props', () => {
    expect(component.id).toEqual('0');
    expect(component.title).toEqual('TitleTest1');
    expect(component.author).toEqual('AuthorTest1');
    expect(component.description).toEqual('DescriptionTest1');
    expect(component.url).toEqual('UrlTest1');
    expect(component.urlToImage).toEqual('UrlToImageTest1');
  });

  it('should emit onNewsDelete', () => {
    component.onDelete('1');
    expect(component.onNewsDelete.emit).toHaveBeenCalledWith('1');
  });
});
