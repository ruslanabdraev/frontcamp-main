import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultComponent } from './default.component';

@Component({
  selector: 'app-header',
  template: '<p>Mock Header</p>'
})
class MockHeaderComponent {}

@Component({
  selector: 'app-sidebar',
  template: '<p>Mock Sidebar</p>'
})
class MockSidebarComponent {}

@Component({
  selector: 'app-footer',
  template: '<p>Mock Footer</p>'
})
class MockFooterComponent {}


describe('DefaultComponent', () => {
  let component: DefaultComponent;
  let fixture: ComponentFixture<DefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule ],
      declarations: [ DefaultComponent, MockHeaderComponent, MockFooterComponent, MockSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has app-header element', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("app-header")).toBeTruthy();
  });

  it('has app-sidebar element', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("app-sidebar")).toBeTruthy();
  });
  
  it('has app-footer element', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("app-footer")).toBeTruthy();
  });
});
