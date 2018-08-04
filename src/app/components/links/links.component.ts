import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Link1Component } from './link-1/link-1.component';
import { Link2Component } from './link-2/link-2.component';
import { Link3Component } from './link-3/link-3.component';
import { LinksService } from '../../services/links.services';


const links = {
  link1: Link1Component,
  link2: Link2Component,
  link3: Link3Component
}

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  linkIndex = 0;

  constructor(
    public viewContainerRef: ViewContainerRef,
    private linkService: LinksService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.linkSlides();
  }

  linkSlides() {
    setInterval(() => {

      (this.linkIndex === Object.keys(links).length - 1) ? this.linkIndex = 0 : this.linkIndex++

      this.linkService.loadComponent(this.viewContainerRef, links[Object.keys(links)[this.linkIndex]], { linkName: 'Link ' + (this.linkIndex + 1).toString() });

    }, 2000);
  }	

}
