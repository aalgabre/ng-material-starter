import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KundenListComponent } from './kunden-list.component';

describe('KundenListComponent', () => {
  let component: KundenListComponent;
  let fixture: ComponentFixture<KundenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KundenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KundenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
