import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsRealComponent } from './widgets-real.component';

describe('WidgetsRealComponent', () => {
  let component: WidgetsRealComponent;
  let fixture: ComponentFixture<WidgetsRealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsRealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
