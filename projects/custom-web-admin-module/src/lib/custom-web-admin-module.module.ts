import { NgModule } from '@angular/core';
import { WCUIKitCoreModule,
  WCUIKitDataModule,
  WCUIKitKendoProviderModule,
  WCUIKitGridModule,
  WCUIKitDirectivesModule } from 'web-console-ui-kit';
import { CustomWebAdminModuleComponent } from './view/custom-web-admin-module.component';

@NgModule({
  declarations: [CustomWebAdminModuleComponent],
  imports: [
    WCUIKitCoreModule
  ],
  exports: [CustomWebAdminModuleComponent]
})
export class CustomWebAdminModuleModule { }
