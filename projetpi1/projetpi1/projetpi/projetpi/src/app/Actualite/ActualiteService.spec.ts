import { TestBed } from '@angular/core/testing';
import {ActualiteService} from "./ActualiteService";


describe('ActualiteServicesService', () => {
  let service: ActualiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActualiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
