import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NbDialogModule, NbWindowModule } from "@nebular/theme";
import { NgSelectModule } from "@ng-select/ng-select";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ThemeModule } from "../../@theme/theme.module";
import { ECommerceModule } from "../e-commerce/e-commerce.module";
import { MiscellaneousModule } from "../miscellaneous/miscellaneous.module";
import { PagesModule } from "../pages.module";
import { ParametreModule } from "../parametre/parametre.module";
import { AcceuilComponent } from "./acceuil/acceuil.component";
import { ClientRoutingModule } from './client-routing.module';
import { EventParentComponent } from './event-parent/event-parent.component';
import { MesEventComponent } from './mes-event/mes-event.component';
import { Top10Component } from './top10/top10.component';

@NgModule({
    imports: [
      ClientRoutingModule ,
      ECommerceModule,
      PagesModule,
      CommonModule,
      ThemeModule,
      
     
      Ng2SmartTableModule,
      NbDialogModule.forChild(),
      NbWindowModule.forChild(),
      MiscellaneousModule,
      ParametreModule,
      NgSelectModule,
      FormsModule
      
    ],
    
    declarations: [
 
     AcceuilComponent,
 
     EventParentComponent,
 
     MesEventComponent,
 
     Top10Component,
       
    ],
    entryComponents:[
      
     
      
    ]
  })
  export class ClientModule {
  }
  
  
  