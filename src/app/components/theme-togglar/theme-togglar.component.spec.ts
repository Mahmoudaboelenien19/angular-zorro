import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeTogglarComponent } from './theme-togglar.component';

describe('ThemeTogglarComponent', () => {
  let component: ThemeTogglarComponent;
  let fixture: ComponentFixture<ThemeTogglarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeTogglarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeTogglarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
