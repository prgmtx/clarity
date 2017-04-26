import {NgModule}             from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {DocumentationComponent} from "./documentation.component";
import {ComponentStatusComponent} from "./component-status/component-status.component";
import {BadgesDemo} from "./demos/badges/badges.demo";

const documentationRoutes: Routes = [
  {
    path: "",
    component: DocumentationComponent,
    data: {
      bodyClass: "layout-documentation",
      browserTitle: "Documentation"
    },
    children: [
      {
        path: "",
        component: ComponentStatusComponent,
        data: {
          bodyClass: "page-documentation",
          browserTitle: "Documentation"
        }
      }, {
        path: BadgesDemo.URL,
        component: BadgesDemo,
        data: BadgesDemo.DATA
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(documentationRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DocumentationRoutingModule {}
