import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDynLoadingComponent } from './modal-dyn-loading.component';

describe('ModalDynLoadingComponent', () => {
  let component: ModalDynLoadingComponent;
  let fixture: ComponentFixture<ModalDynLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalDynLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalDynLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
