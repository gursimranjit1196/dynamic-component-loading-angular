import { Component, OnInit, Input, Output, ViewContainerRef } from '@angular/core';
import { Subject } from '../../../../node_modules/rxjs/Subject';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input('message') message = "Demo Message."
  @Output('messageEvent') messageEvent:Subject<string> = new Subject();

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit() {
  }

  onCloseClick() {
    this.messageEvent.next('Message Event Emitted.')
  }

}
