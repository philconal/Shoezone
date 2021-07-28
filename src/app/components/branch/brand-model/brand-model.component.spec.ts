import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandModelComponent } from './brand-model.component';

describe('BrandModelComponent', () => {
  let component: BrandModelComponent;
  let fixture: ComponentFixture<BrandModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
