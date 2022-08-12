import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExplorerComponent} from "./explorer/explorer.component";
import {VisualizerComponent} from "./visualizer/visualizer.component";
import {UploadComponent} from "./upload/upload.component";

const routes: Routes = [
  {
    path: 'explorer',
    component: ExplorerComponent
  },
  {
    path: 'visualizer',
    component: VisualizerComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'explorer'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
