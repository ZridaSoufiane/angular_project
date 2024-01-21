import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductListComponent } from './addproduct-list.component';

describe('AddproductListComponent', () => {
  let component: AddproductListComponent;
  let fixture: ComponentFixture<AddproductListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddproductListComponent]
    });
    fixture = TestBed.createComponent(AddproductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
