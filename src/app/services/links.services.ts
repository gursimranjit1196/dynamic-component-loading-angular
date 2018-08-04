import { Injectable, ViewContainerRef, ComponentFactoryResolver, Component } from "@angular/core";

@Injectable()
export class LinksService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  loadComponent(viewContainerRef: ViewContainerRef, component, data: object) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance['linkName'] = data['linkName']
  }

}