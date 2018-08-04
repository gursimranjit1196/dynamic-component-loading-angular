import { Component, OnInit, ViewChild } from '@angular/core';
import { LinksComponent } from '../links/links.component';
import { Link1Component } from '../links/link-1/link-1.component';
import { Link2Component } from '../links/link-2/link-2.component';
import { Link3Component } from '../links/link-3/link-3.component';
import { LinksService } from '../../services/links.services';

const links = {
  link1: Link1Component,
  link2: Link2Component,
  link3: Link3Component
}

@Component({
  selector: 'app-comp-ref-loading',
  templateUrl: './comp-ref-loading.component.html',
  styleUrls: ['./comp-ref-loading.component.css']
})
export class CompRefLoadingComponent implements OnInit {

  @ViewChild(LinksComponent) linksComponent: LinksComponent

  linkIndex: number = 0

  constructor(
    private linkService: LinksService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadDynComponent()
  }

  loadDynComponent() {
    setInterval(() => {

      (this.linkIndex === Object.keys(links).length - 1) ? this.linkIndex = 0 : this.linkIndex++

      this.linkService.loadComponent(this.linksComponent.viewContainerRef, links[Object.keys(links)[this.linkIndex]], { linkName: 'Link' + (this.linkIndex + 1).toString() });

    }, 2000);
  }

}
