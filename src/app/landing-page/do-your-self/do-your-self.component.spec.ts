import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoYourSelfComponent } from './do-your-self.component';

describe('DoYourSelfComponent', () => {
  let component: DoYourSelfComponent;
  let fixture: ComponentFixture<DoYourSelfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoYourSelfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoYourSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
