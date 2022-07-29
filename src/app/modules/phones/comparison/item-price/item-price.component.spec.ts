import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPriceComponent } from './item-price.component';

describe('ItemPriceComponent', () => {
  let component: ItemPriceComponent;
  let fixture: ComponentFixture<ItemPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
