import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceManagementComponent } from './e-commerce-management.component';

describe('ECommerceManagementComponent', () => {
  let component: ECommerceManagementComponent;
  let fixture: ComponentFixture<ECommerceManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECommerceManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECommerceManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
