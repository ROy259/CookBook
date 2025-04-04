import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciepeDeatilComponent } from './reciepe-deatil.component';

describe('ReciepeDeatilComponent', () => {
  let component: ReciepeDeatilComponent;
  let fixture: ComponentFixture<ReciepeDeatilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReciepeDeatilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReciepeDeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
