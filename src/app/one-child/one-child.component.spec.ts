import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneChildComponent } from './one-child.component';

describe('OneChildComponent', () => {
  let component: OneChildComponent;
  let fixture: ComponentFixture<OneChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
