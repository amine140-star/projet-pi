import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffActualiteFComponent } from './aff-actualite.component';

describe('AffActualiteComponent', () => {
  let component: AffActualiteFComponent;
  let fixture: ComponentFixture<AffActualiteFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffActualiteFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffActualiteFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
