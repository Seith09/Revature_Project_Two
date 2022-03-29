import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatedRComponent } from './rated-r.component';

describe('RatedRComponent', () => {
  let component: RatedRComponent;
  let fixture: ComponentFixture<RatedRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatedRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatedRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
