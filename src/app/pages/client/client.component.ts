import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsService } from '../../@core/utils';
import { MENU_ITEMS } from './client-menu';


@Component({
  selector: 'ngx-client',
  styleUrls: ['./client.component.scss'],
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class ClientComponent {
  public static urlConfig = 'http://localhost:8082';
  menu = MENU_ITEMS;

  constructor(private analytics: AnalyticsService, private translate: TranslateService) {
    translate.addLangs(['en', 'fr', 'ar']);
    translate.setDefaultLang('fr');
    let currentLanguage = window.localStorage.getItem("currentLang");
    if((currentLanguage != null) && translate.getLangs().includes(currentLanguage.toLowerCase())) {
      translate.use(currentLanguage.toLowerCase());
    }
  } 
}


