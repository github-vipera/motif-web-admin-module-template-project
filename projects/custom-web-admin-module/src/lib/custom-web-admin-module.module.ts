import { NgModule } from '@angular/core';
import { CustomWebAdminModuleComponent } from './view/custom-web-admin-module.component';
import { WCUIKitCoreModule,
  WCUIKitDataModule,
  WCUIKitKendoProviderModule,
  WCUIKitGridModule,
  WCUIKitDirectivesModule } from 'web-console-ui-kit';
import { GridModule } from '@progress/kendo-angular-grid';
import { LoggerModule } from 'ngx-logger';
import { CommonsUIModule, CommonSelectorsModule } from 'motif-web-admin-core';

@NgModule({
  declarations: [CustomWebAdminModuleComponent],
  imports: [
    WCUIKitCoreModule,
    WCUIKitKendoProviderModule,
    WCUIKitDataModule,
    WCUIKitGridModule,
    WCUIKitDirectivesModule,
    GridModule,
    LoggerModule,
    CommonsUIModule,
    CommonSelectorsModule
  ],
  exports: [CustomWebAdminModuleComponent]
})
export class CustomWebAdminModuleModule { }
