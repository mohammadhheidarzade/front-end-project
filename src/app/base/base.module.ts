import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseComponent} from './base.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';

@NgModule({
    declarations: [BaseComponent],
    exports: [BaseComponent],
    imports: [CommonModule, NzLayoutModule, NzBreadCrumbModule, NzDropDownModule],
})
export class BaseModule {}
