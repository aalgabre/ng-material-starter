import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AhvComponent } from './ahv.component';

describe('AhvComponent', () => {
  let component: AhvComponent;
  let fixture: ComponentFixture<AhvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AhvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AhvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
