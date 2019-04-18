import { TestBed } from '@angular/core/testing';

import { CustomWebAdminModuleService } from './custom-web-admin-module.service';

describe('CustomWebAdminModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomWebAdminModuleService = TestBed.get(CustomWebAdminModuleService);
    expect(service).toBeTruthy();
  });
});
