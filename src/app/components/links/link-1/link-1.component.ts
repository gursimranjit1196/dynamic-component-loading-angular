import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-1',
  templateUrl: './link-1.component.html',
  styleUrls: ['./link-1.component.css']
})
export class Link1Component implements OnInit {

  @Input('linkName') linkName: string = 'Tour of Heroes'

  constructor() { }

  ngOnInit() {
  }

}
