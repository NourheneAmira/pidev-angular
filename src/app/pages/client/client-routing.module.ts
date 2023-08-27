import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AcceuilComponent } from "./acceuil/acceuil.component";
import { ClientComponent } from "./client.component";
import { EventParentComponent } from "./event-parent/event-parent.component";
import { MesEventComponent } from "./mes-event/mes-event.component";
import { Top10Component } from "./top10/top10.component";

const routes: Routes = [{
  path: '',
  component: ClientComponent,
  children: [
    {
      path: 'acceuil',
      component: AcceuilComponent,
    },
    {
      path: 'eventP',
      component: EventParentComponent,
    },
    {
      path: 'mesEvent',
      component: MesEventComponent,
    },
    {
      path: 'top10',
      component: Top10Component,
    },
    {
      path: '',
      redirectTo: 'cceuil',
      pathMatch: 'full',
    }, 
   
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {
}

