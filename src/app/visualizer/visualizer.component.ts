import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import G6 from '@antv/g6';

@Component({
    selector: 'app-visualizer',
    templateUrl: './visualizer.component.html',
    styleUrls: ['./visualizer.component.scss'],
})
export class VisualizerComponent implements OnInit {
    ngOnInit(): void {
        this.initOgma();
    }

    private initOgma(): void {
        const data = {
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

        const graph = new G6.Graph({
            container: 'graph-container',
            width: 800,
            height: 500,
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
        });

        graph.on('node:mouseenter', (e) => {
            const nodeItem = e.item; // Get the target item
            graph.setItemState(nodeItem as any, 'hover', true);
        });

        graph.on('node:mouseleave', (e) => {
            const nodeItem = e.item;
            graph.setItemState(nodeItem as any, 'hover', false);
        });

        graph.on('edge:mouseenter', (e) => {
            const nodeItem = e.item; // Get the target item
            graph.setItemState(nodeItem as any, 'hover', true);
        });

        graph.on('edge:mouseleave', (e) => {
            const nodeItem = e.item;
            graph.setItemState(nodeItem as any, 'hover', false);
        });

        graph.data(data);
        graph.render();
    }
}
