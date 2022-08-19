import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExplorerComponent} from "./explorer/explorer.component";
import {VisualizerComponent} from "./visualizer/visualizer.component";
import {UploadComponent} from "./upload/upload.component";

const routes: Routes = [
  {
    path: 'visualizer',
    children: [
      {
        path: 'graph',
        component: VisualizerComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'graph'
      }
    ]
  },
  {
    path: 'data',
    children: [
      {
        path: 'upload',
        component: UploadComponent
      },
      {
        path: 'explorer',
        component: ExplorerComponent
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'explorer'
      }
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'data/explorer'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
