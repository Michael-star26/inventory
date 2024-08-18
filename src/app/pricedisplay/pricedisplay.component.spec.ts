import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricedisplayComponent } from './pricedisplay.component';

describe('PricedisplayComponent', () => {
  let component: PricedisplayComponent;
  let fixture: ComponentFixture<PricedisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricedisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricedisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
