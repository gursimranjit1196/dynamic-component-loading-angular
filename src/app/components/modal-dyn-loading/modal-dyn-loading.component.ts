import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-modal-dyn-loading',
  templateUrl: './modal-dyn-loading.component.html',
  styleUrls: ['./modal-dyn-loading.component.css']
})
export class ModalDynLoadingComponent implements OnInit {

  @ViewChild('modalButton') modalButton;
  @ViewChild('modalTemplate', { read: ViewContainerRef }) modalTemplate;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.openModal()
  }

  openModal() {
    let htmlEle: HTMLElement = this.modalButton.nativeElement as HTMLElement;
    htmlEle.click();
  }

  onModalClick(event) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(MessageComponent);
    this.modalTemplate.clear();
    const componentRef = this.modalTemplate.createComponent(componentFactory);
    componentRef.instance['message'] = 'Message Data';
    componentRef.instance.messageEvent.subscribe((res) => {
      alert(res);
    })
  }


}
