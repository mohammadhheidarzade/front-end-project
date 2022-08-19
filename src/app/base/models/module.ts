import {SubModule} from "./sub-module";

export class Module {
  public id!: string;
  public name!: string;
  public subModules!: SubModule[]
}
