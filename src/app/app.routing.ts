import { Routes, RouterModule } from '@angular/router';
import { LinksComponent } from './components/links/links.component';
import { NgModule } from '../../node_modules/@angular/core';
import { HomeComponent } from './components/home/home.component';
import { ModalDynLoadingComponent } from './components/modal-dyn-loading/modal-dyn-loading.component';
import { CompRefLoadingComponent } from './components/comp-ref-loading/comp-ref-loading.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'router-load-links', component: LinksComponent },
  { path: 'modal-dyn-loading', component: ModalDynLoadingComponent },
  { path: 'comp-ref-loading', component: CompRefLoadingComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }