import { Routes } from '@angular/router'

export const moduleRoutes: Routes = [
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
