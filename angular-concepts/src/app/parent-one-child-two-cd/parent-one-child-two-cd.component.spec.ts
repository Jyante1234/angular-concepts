import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentOneChildTwoCdComponent } from './parent-one-child-two-cd.component';

describe('ParentOneChildTwoCdComponent', () => {
  let component: ParentOneChildTwoCdComponent;
  let fixture: ComponentFixture<ParentOneChildTwoCdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentOneChildTwoCdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentOneChildTwoCdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
