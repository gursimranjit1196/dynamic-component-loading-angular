import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRefLoadingComponent } from './comp-ref-loading.component';

describe('CompRefLoadingComponent', () => {
  let component: CompRefLoadingComponent;
  let fixture: ComponentFixture<CompRefLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompRefLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompRefLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
