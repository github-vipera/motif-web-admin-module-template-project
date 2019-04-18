import { CustomWebAdminModuleComponent } from './view/custom-web-admin-module.component';
import { Routes } from '@angular/router'

export const moduleRoutes: Routes = [
  {component:CustomWebAdminModuleComponent, path:'Custom Component'},
];


export function resolveModuleRoute(requiredPlugins?:Array<any>):Routes {
    if (!requiredPlugins){
        //Return All
        return moduleRoutes;
    } else {
        //TODO!! Filter
        return moduleRoutes;
    }
}
