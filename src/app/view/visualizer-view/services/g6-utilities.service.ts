import {Injectable} from '@angular/core';
import {Graph} from '@antv/g6';

@Injectable()
export class G6UtilitiesService {
    public handleNodeMouseEnter(graph: Graph): void {
        graph.on('node:mouseenter', (e) => {
            const nodeItem = e.item;
            graph.setItemState(nodeItem as any, 'hover', true);
        });
    }

    public handleNodeMouseLeave(graph: Graph): void {
        graph.on('node:mouseleave', (e) => {
            const nodeItem = e.item;
            graph.setItemState(nodeItem as any, 'hover', false);
        });
    }
    public handleEdgeMouseEnter(graph: Graph): void {
        graph.on('edge:mouseenter', (e) => {
            const nodeItem = e.item;
            graph.setItemState(nodeItem as any, 'hover', true);
        });
    }
    public handleEdgeMouseLeave(graph: Graph): void {
        graph.on('edge:mouseleave', (e) => {
            const nodeItem = e.item;
            graph.setItemState(nodeItem as any, 'hover', false);
        });
    }
}
