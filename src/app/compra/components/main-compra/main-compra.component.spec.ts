import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCompraComponent } from './main-compra.component';

describe('MainCompraComponent', () => {
  let component: MainCompraComponent;
  let fixture: ComponentFixture<MainCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
