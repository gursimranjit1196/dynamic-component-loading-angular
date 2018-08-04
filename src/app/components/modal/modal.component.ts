import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit() {
  }

}
