import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetNewComponent } from './planet-new.component';

describe('PlanetNewComponent', () => {
  let component: PlanetNewComponent;
  let fixture: ComponentFixture<PlanetNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
