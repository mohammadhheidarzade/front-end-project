import {Component} from '@angular/core';
import {G6UtilitiesService} from '../services/g6-utilities.service';
import {Item} from "@antv/g6";

@Component({
    selector: 'app-properties-view',
    templateUrl: './properties-view.component.html',
    styleUrls: ['./properties-view.component.scss'],
})
export class PropertiesViewComponent {
    public isEnable = false;
    public firstOpen = true;

    data: ItemData[] = [];

    public constructor(g6UtilityService: G6UtilitiesService) {
        g6UtilityService.nodeDoubleClick.subscribe((item: Item) => {
            this.isEnable = true;
            this.firstOpen = false
        });

        this.data = [
            {
                title: 'hello',
                content: 'hello man',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
            },
            {
                title: 'hello',
                content: 'hello man',
                avatar: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
            }
        ]
    }
}

export class ItemData {
    public avatar?: string;
    public title?: string;
    public href?: string;
    public description?: string;
    public content?: string;
}
