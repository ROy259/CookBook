import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReciepesComponent } from './all-reciepes.component';

describe('AllReciepesComponent', () => {
  let component: AllReciepesComponent;
  let fixture: ComponentFixture<AllReciepesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllReciepesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllReciepesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
