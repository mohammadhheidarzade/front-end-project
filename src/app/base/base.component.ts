import {Component, OnInit} from '@angular/core';
import {faDiagramProject, faShareNodes, faTable, faUpload} from "@fortawesome/free-solid-svg-icons";
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {Module} from "./models/module";
import {NavigationEnd, Router} from "@angular/router";
import {SubModule} from "./models/sub-module";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  public icon: IconDefinition = faDiagramProject;
  public selectedModule?: Module;
  public selectedSubModule?: SubModule;

  public modules: Module[] = [
    {
      id: 'data',
      name: 'داده',
      subModules: [
        {
          id: 'explorer',
          icon: faTable,
          url: 'explorer'
        },
        {
          id: 'upload',
          icon: faUpload,
          url: 'upload'
        }
      ]
    },
    {
      id: 'visualizer',
      name: 'گراف',
      subModules: [
        {
          id: 'graph',
          icon: faShareNodes,
          url: 'graph'
        }
      ]
    }
  ];

  public constructor(private route: Router) {}

  public ngOnInit(): void {
    this.route.events.subscribe(changes => {
      if (!(changes instanceof NavigationEnd)) return;
      const parts = changes.urlAfterRedirects.substring(1).split('/');

      if (parts.length < 2) return;

      this.selectedModule = this.modules.find(x => x.id === parts[0]);
      this.selectedSubModule = this.selectedModule?.subModules.find(x => x.id === parts[1]);
    });
  }

  public moduleClicked(module: Module): void {
    if (this.selectedModule?.id === module.id) return;

    this.route.navigate([module.id]);
  }

  public subModuleClicked(subModule: SubModule): void {
    if (this.selectedSubModule?.id === subModule.id) return;

    this.route.navigate([this.selectedModule?.id, subModule.id]);
  }
}
