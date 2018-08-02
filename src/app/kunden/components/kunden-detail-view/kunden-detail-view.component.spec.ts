import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KundenDetailViewComponent } from './kunden-detail-view.component';

describe('KundenDetailViewComponent', () => {
  let component: KundenDetailViewComponent;
  let fixture: ComponentFixture<KundenDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KundenDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KundenDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
