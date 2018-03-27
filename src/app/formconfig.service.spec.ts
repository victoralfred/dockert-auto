import { TestBed, inject } from '@angular/core/testing';

import { FormconfigService } from './formconfig.service';

describe('FormconfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormconfigService]
    });
  });

  it('should be created', inject([FormconfigService], (service: FormconfigService) => {
    expect(service).toBeTruthy();
  }));
});
