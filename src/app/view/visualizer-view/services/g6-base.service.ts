import {Injectable} from '@angular/core';
import {G6ConfigService} from './g6-config.service';
import G6, {Graph} from '@antv/g6';
import {G6UtilitiesService} from './g6-utilities.service';

@Injectable()
export class G6BaseService extends G6ConfigService {
    public constructor(private g6UtilitiesService: G6UtilitiesService) {
        super();
    }

    public init(container: HTMLElement): void {
        this.initGraphContainer(container);
        this.initG6Graph();
    }

    public initGraphContainer(container: HTMLElement): void {
        this.graphContainer = container;
    }

    public initG6Graph(): void {
        const graph = new G6.Graph(this.g6GraphConfig);

        this.handleMouseStateChangeOnGraph(graph);

        this.initGraphSize(graph);
        graph.data(this.data);
        graph.render();
    }

    public initGraphSize(graph: Graph): void {
        graph.changeSize(this.graphContainer.offsetWidth, this.graphContainer.offsetHeight);
    }

    public handleMouseStateChangeOnGraph(graph: Graph): void {
        this.g6UtilitiesService.handleNodeMouseEnter(graph);
        this.g6UtilitiesService.handleNodeMouseLeave(graph);
        this.g6UtilitiesService.handleEdgeMouseEnter(graph);
        this.g6UtilitiesService.handleEdgeMouseLeave(graph);
        this.g6UtilitiesService.handleNodeMouseDoubleClick(graph);
    }
}
