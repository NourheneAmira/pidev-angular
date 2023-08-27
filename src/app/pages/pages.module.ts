import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import {ParametreModule} from './parametre/parametre.module';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import { NbWindowModule } from '@nebular/theme';
import { NgSelectModule } from '@ng-select/ng-select';
import { EventComponent } from './event/event.component';
import { ModalEventComponent } from './event/modal-event/modal-event.component';
import { ShowEventComponent } from './event/show-event/show-event.component';
import { ClientComponent } from './client/client.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ClientModule } from './client/client.module';
import { HttpLoaderFactory } from '../app.module';
import { HttpClient } from '@angular/common/http';

//import { ToastrServiceService } from './Toastr/toastr-service.service';
const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    Ng2SmartTableModule,
    NgSelectModule,
    ThemeModule,
    ECommerceModule,
    MiscellaneousModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      } }),
   

    ParametreModule,
    NbWindowModule.forChild()
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    
   
    
    EventComponent,
    ModalEventComponent,
    ShowEventComponent,
    ClientComponent
     
  ],
  exports: [
    ...PAGES_COMPONENTS,  
    TranslateModule,
  ],
  entryComponents:[
    
    EventComponent,
    ModalEventComponent,
    ShowEventComponent ,

  ],
 
})
export class PagesModule {
}
