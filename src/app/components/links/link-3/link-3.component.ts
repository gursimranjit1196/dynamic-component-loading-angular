import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-3',
  templateUrl: './link-3.component.html',
  styleUrls: ['./link-3.component.css']
})
export class Link3Component implements OnInit {

  @Input('linkName') linkName: string = 'Angular blog'

  constructor() { }

  ngOnInit() {
  }

}
