import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductrowComponent } from './productrow.component';

describe('ProductrowComponent', () => {
  let component: ProductrowComponent;
  let fixture: ComponentFixture<ProductrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductrowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
