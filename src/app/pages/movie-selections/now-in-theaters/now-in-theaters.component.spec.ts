import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NowInTheatersComponent } from './now-in-theaters.component';

describe('NowInTheatersComponent', () => {
  let component: NowInTheatersComponent;
  let fixture: ComponentFixture<NowInTheatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NowInTheatersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NowInTheatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
