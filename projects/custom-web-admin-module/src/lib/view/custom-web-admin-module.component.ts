import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { PluginView, NGXLogger } from 'web-console-core';
import { Domain, Application } from '@wa-motif-open-api/platform-service'
import { ComboBoxComponent } from '@progress/kendo-angular-dropdowns';
import { ApplicationsService, Service } from '@wa-motif-open-api/catalog-service';


const LOG_TAG = '[CustomWebAdminModuleComponent]';


@Component({
  selector: 'cwa-custom-web-admin-module',
  styleUrls: [ './custom-web-admin-module.component.scss' ],
  templateUrl: './custom-web-admin-module.component.html'
})
@PluginView('My Custom Plugin', {
  iconName: 'mymod-ico-fire'
})
export class CustomWebAdminModuleComponent implements OnInit {

  @ViewChild('applicationsCombo') _appComboBox: ComboBoxComponent;

  @Input() public selectedDomain: Domain;
  public _selectedApplication: Application;

  data : Array<Service>;

  constructor(private logger: NGXLogger, private applicationService:ApplicationsService) { }

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
    if (this.selectedDomain && this.selectedApplication) {
      this.applicationService.getServiceList(this.selectedDomain.name, this.selectedApplication.name).subscribe( ( services: Array<Service> ) => {
        this.logger.debug(LOG_TAG, 'getServiceCatalog services[' + this.selectedApplication.name + '@' + this.selectedDomain.name + ']:', services );
        this.data = services;
        }, ( error ) => {
            this.logger.error(LOG_TAG, 'getServiceCatalog error:' , error);
        });
    } else {
      this.data = [];
    }
  }


}
