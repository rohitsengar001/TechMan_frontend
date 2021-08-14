import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderChipsComponent } from './header-chips.component';

describe('HeaderChipsComponent', () => {
  let component: HeaderChipsComponent;
  let fixture: ComponentFixture<HeaderChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderChipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
