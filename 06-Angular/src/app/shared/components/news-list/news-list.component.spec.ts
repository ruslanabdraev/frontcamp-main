import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsListComponent } from './news-list.component';
import { Input, Component, NO_ERRORS_SCHEMA} from '@angular/core'
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-news-item',
  template: '<p>Mock News Item</p>'
})
class MockNewsItemComponent {
  @Input() id:string;
  @Input() author:string;
  @Input() title:string;
  @Input() description:string;
  @Input() url:string;
  @Input() urlToImage: string;
  @Input() publishedAt: string;
  @Input() isLocal: boolean;
}

describe('NewsListComponent', () => {
  let component: NewsListComponent;
  let fixture: ComponentFixture<NewsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule],
      declarations: [ NewsListComponent,  MockNewsItemComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has app-news-item element', () => {
    const compiled = fixture.debugElement.query(By.css("app-news-item"));
    expect(compiled).toBeDefined();
  });
});
