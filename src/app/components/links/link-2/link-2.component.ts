import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-2',
  templateUrl: './link-2.component.html',
  styleUrls: ['./link-2.component.css']
})
export class Link2Component implements OnInit {

  @Input('linkName') linkName: string = 'CLI Documentation'

  constructor() { }

  ngOnInit() {
  }

}
