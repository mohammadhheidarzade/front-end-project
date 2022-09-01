import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VisualizerViewComponent} from './visualizer-view.component';
import {G6BaseService} from './services/g6-base.service';
import {G6ConfigService} from './services/g6-config.service';
import {G6UtilitiesService} from './services/g6-utilities.service';

@NgModule({
    declarations: [VisualizerViewComponent],
    providers: [G6BaseService, G6ConfigService, G6UtilitiesService],
    imports: [CommonModule],
})
export class VisualizerViewModule {}
