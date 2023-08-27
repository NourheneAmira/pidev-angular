import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import {ParametreComponent} from './parametre/parametre.component';
import { EventComponent } from './event/event.component';

const routes: Routes = [{ path: 'Client', loadChildren: 'app/pages/client/client.module#ClientModule' },
{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: ECommerceComponent,
  }, {
      path: 'parametre',
      component: ParametreComponent,
    }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'event',
    component: EventComponent,
  },
    {
    path: '**',
    component: NotFoundComponent,
  },{ path: '', redirectTo: 'Client', pathMatch: 'full' },
  { path: '**', redirectTo: 'Client' }, ],
  
    
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
