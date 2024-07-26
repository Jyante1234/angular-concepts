import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomViewEncapComponent } from './bottom-view-encap.component';

describe('BottomViewEncapComponent', () => {
  let component: BottomViewEncapComponent;
  let fixture: ComponentFixture<BottomViewEncapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomViewEncapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomViewEncapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
