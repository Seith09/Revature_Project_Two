import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageTrailerComponent } from './homepage-trailer.component';

describe('HomepageTrailerComponent', () => {
  let component: HomepageTrailerComponent;
  let fixture: ComponentFixture<HomepageTrailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageTrailerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageTrailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
