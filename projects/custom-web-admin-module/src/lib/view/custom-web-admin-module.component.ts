import { Component, OnInit } from '@angular/core';
import { PluginView } from 'web-console-core';

@Component({
  selector: 'cwa-custom-web-admin-module',
  styleUrls: [ './custom-web-admin-module.component.scss' ],
  templateUrl: './custom-web-admin-module.component.html'
})
@PluginView('My Custom Plugin', {
  iconName: 'mymod-ico-fire'
})
export class CustomWebAdminModuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
