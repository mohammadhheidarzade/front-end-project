import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutWrapperComponent } from './layout-wrapper.component';

describe('LayoutWrapperComponent', () => {
  let component: LayoutWrapperComponent;
  let fixture: ComponentFixture<LayoutWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
