import {Injectable} from '@angular/core';
import {GraphOptions} from '@antv/g6-core';

@Injectable({
    providedIn: 'root',
})
export class G6ConfigService {
    public graphContainer!: HTMLElement;

    public g6GraphConfig: GraphOptions = {
        container: 'graph-container',
        fitView: true,
        animate: true,
        modes: {
            default: ['drag-canvas', 'drag-node', 'zoom-canvas'],
        },
        defaultNode: {
            style: {
                fill: '#41228D',
            },
        },
        defaultEdge: {
            style: {
                stroke: '#41228D',
            },
        },
        nodeStateStyles: {
            hover: {
                fill: 'lightsteelblue',
                fillOpacity: 0.1,
                lineWidth: 10,
            },
            click: {
                stroke: '#000',
                lineWidth: 3,
            },
        },
        edgeStateStyles: {
            click: {
                stroke: 'steelblue',
            },
            hover: {
                stroke: 'steelblue',
            },
        },
    };

    public data = {
        nodes: [
            {
                id: 'node1',
                x: 100,
                y: 200,
                size: 70,
            },
            {
                id: 'node2',
                x: 300,
                y: 200,
                size: 70,
            },
        ],
        edges: [
            {
                source: 'node1',
                target: 'node2',
                size: 15,
            },
        ],
    };
}
