import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PluginView } from 'web-console-core';
import { Domain, ApplicationsService, Application } from '@wa-motif-open-api/platform-service'
import { ComboBoxComponent } from '@progress/kendo-angular-dropdowns';


@Component({
  selector: 'cwa-custom-web-admin-module',
  styleUrls: [ './custom-web-admin-module.component.scss' ],
  templateUrl: './custom-web-admin-module.component.html'
})
@PluginView('Plugins', {
  iconName: 'wa-ico-plugins'
})
export class CustomWebAdminModuleComponent implements OnInit {

  @ViewChild('applicationsCombo') _appComboBox: ComboBoxComponent;
  //@ViewChild('domainSelector') domainSelector: DomainSelectorComboBoxComponent;
  //@ViewChild('applicationSelector') applicationSelector: ApplicationSelectorComboBoxComponent;

  @Input() public selectedDomain: Domain;
  public _selectedApplication: Application; // combo box selection

  constructor() { }

  ngOnInit() {
  }

      /**
    * Set the selcted application
    */
   @Input()
   public set selectedApplication(application: Application) {
       this._selectedApplication = application;
       this.reloadData();
   }

   public get selectedApplication():Application {
     return this._selectedApplication;
   }

   public onRefreshClicked(): void {
    this.reloadData();
   }

  private reloadData(){
    //TODO!!
  }


}
