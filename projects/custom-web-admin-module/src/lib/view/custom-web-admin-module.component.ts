import { Component, OnInit, OnDestroy } from '@angular/core';
import { PluginView } from 'web-console-core';
import { Gridster } from 'web-console-ui-kit'
import { NGXLogger} from 'web-console-core';
import { timer, Subscription } from 'rxjs';

const LOG_TAG = '[CustomWebAdminModuleComponent]';


@Component({
  selector: 'cwa-custom-web-admin-module',
  styleUrls: [ './custom-web-admin-module.component.scss' ],
  templateUrl: './custom-web-admin-module.component.html'
})
@PluginView('Plugins', {
  iconName: 'wa-ico-plugins'
})
export class CustomWebAdminModuleComponent implements OnInit, OnDestroy {

  // Gridster configuration
  options: Gridster.GridsterConfig;
  clockItem:Gridster.GridsterItem = {cols: 5, rows: 2, y: 0, x: 0};
  counterItem:Gridster.GridsterItem = {cols: 3, rows: 2, y: 0, x: 5};
  clockTimer:Subscription;
  counterTimer:Subscription;

  // Data model
  dateTime:Date = new Date;
  counter: number = 1;

  constructor(private logger: NGXLogger) {
    this.logger.debug(LOG_TAG , 'Opening...');

    this.options = {
        gridType: Gridster.GridType.Fixed,
        compactType: Gridster.CompactType.None,
        draggable: {
          enabled: true
        },
        resizable: {
          enabled: true,
        },
        displayGrid: 'onDrag&Resize',
        minCols: 3,
        maxCols: 100,
        minRows: 3,
        maxRows: 100,
        maxItemCols: 100,
        minItemCols: 1,
        maxItemRows: 100,
        minItemRows: 1,
        maxItemArea: 2500,
        minItemArea: 1,
        defaultItemCols: 1,
        defaultItemRows: 1,
        fixedColWidth: 70,
        fixedRowHeight: 70
      };
  }

  ngOnInit() {
    this.logger.debug(LOG_TAG , 'Initializing...');

    this.clockTimer = timer(0, 1000).subscribe(x=>{
      this.dateTime = new Date();
    });

    this.counterTimer = timer(0, 1560).subscribe(x=>{
      this.counter++;
    });

  }

  ngOnDestroy() {
    this.clockTimer.unsubscribe();
    this.counterTimer.unsubscribe();
  }

}
