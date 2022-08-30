import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
declare var require: any

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent implements OnInit {
  private ogma: any;
  private nodes: any = [];
  private links: any = [];
  private nodesMaxCount: number = 10;
  private nodesCount!: number;
  private linksCount!: number;
  private width!: number;
  private height!: number;

  ngOnInit(): void {
    this.initOgma();
  }

  private initOgma(): void {
    const Ogma = require('../../assets/ogma.min.js');
    this.ogma = new Ogma({
      container: 'graph-container',
      options: {
        backgroundColor: '#514F6A'
      }
    });

    this.width = this.ogma.getContainer().offsetWidth;
    this.height = this.ogma.getContainer().offsetHeight;
    // graph-container width and height

    this.nodesCount = Math.floor(Math.random() * this.nodesMaxCount) + 1;
    this.linksCount = Math.floor(Math.random() * this.nodesMaxCount);
    // random nodes count and links count

    // creating nodes
    this.nodes = [];
    for (let i = 0; i < this.nodesCount; i++) {
      const randomX = Math.random() * this.width - this.width / 2;
      const randomY = Math.random() * this.height - this.height / 2;

      this.nodes.push({
        id: 'n' + i,
        data: { name: 'Node ' + i },
        attributes: { x: randomX, y: randomY, radius: 20 },
      }); // data is a custom dictionary for containing data
    }

    this.ogma.addNodes(this.nodes);
    // adding created nodes to ogma

    // creating links
    this.links = [] as any;
    for (let i = 0; i < this.linksCount; i++) {
      const sourceId = 'n' + Math.floor(Math.random() * this.nodesCount);
      const targetId = 'n' + Math.floor(Math.random() * this.nodesCount);

      if (sourceId === targetId && this.nodesCount !== 1) {
        i--;
        continue;
      }

      const link = {
        id: 'e' + i,
        source: sourceId,
        target: targetId,
        data: { name: 'parent' },
      };

      this.links.push(link); // data is a custom dictionary for containing data
    }

    this.ogma.addEdges(this.links);
    // adding created links to ogma
  }
}
