import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffActualiteComponent } from './aff-actualite.component';

describe('AffActualiteComponent', () => {
  let component: AffActualiteComponent;
  let fixture: ComponentFixture<AffActualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffActualiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
