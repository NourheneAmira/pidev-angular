
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AnalyticsService } from './@core/utils/analytics.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService,
    private translate: TranslateService) {
      translate.setDefaultLang('fr');

  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
  }
}
