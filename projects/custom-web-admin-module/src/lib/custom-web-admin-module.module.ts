import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WCUIKitCoreModule,
  WCUIKitGridsterProviderModule,
  WCUIKitDataModule,
 } from 'web-console-ui-kit';
import { CustomWebAdminModuleComponent } from './view/custom-web-admin-module.component';

@NgModule({
  declarations: [CustomWebAdminModuleComponent],
  imports: [
    CommonModule,
    WCUIKitCoreModule,
    WCUIKitGridsterProviderModule,
    WCUIKitDataModule
  ],
  exports: [CustomWebAdminModuleComponent]
})
export class CustomWebAdminModuleModule { }
