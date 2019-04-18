import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomWebAdminModuleComponent } from './custom-web-admin-module.component';

describe('CustomWebAdminModuleComponent', () => {
  let component: CustomWebAdminModuleComponent;
  let fixture: ComponentFixture<CustomWebAdminModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomWebAdminModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomWebAdminModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
