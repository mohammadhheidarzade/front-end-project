import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplorerViewComponent } from './explorer-view.component';

describe('ExplorerViewComponent', () => {
  let component: ExplorerViewComponent;
  let fixture: ComponentFixture<ExplorerViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplorerViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExplorerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
