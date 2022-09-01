import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Module} from '../../models/module';
import {SubModule} from '../../models/sub-module';

@Component({
    selector: 'app-layout-wrapper',
    templateUrl: './layout-wrapper.component.html',
    styleUrls: ['./layout-wrapper.component.scss'],
})
export class LayoutWrapperComponent {
    public selectedModule?: Module;
    public selectedSubModule?: SubModule;

    public modules: Module[] = [
        {
            id: 'data',
            name: 'Explorer',
            subModules: [
                {
                    id: 'explorer',
                    icon: 'fa-regular fa-table',
                    url: 'explorer',
                },
            ],
        },
        {
            id: 'visualizer-view',
            name: 'Visualizer',
            subModules: [
                {
                    id: 'graph',
                    icon: 'fa-solid fa-share-nodes',
                    url: 'graph',
                },
            ],
        },
    ];

    public constructor(private route: Router) {}

    public async moduleClicked(module: Module): Promise<void> {
        if (this.selectedModule?.id === module.id) return;

        await this.route.navigate([module.id]);
    }

    public subModuleClicked(subModule: SubModule): void {
        if (this.selectedSubModule?.id === subModule.id) return;

        this.route.navigate([this.selectedModule?.id, subModule.id]);
    }
}
