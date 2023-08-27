import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EventService } from '../event/event.service';
import { MultiStatModel } from './MultiStat';
import { StatModel } from './Stat';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
})
export class ECommerceComponent { title = 'Angular Charts';
multi1: MultiStatModel[];
multi2: MultiStatModel[];
stat3
dateD:Date
dateF:Date
view: any[] = [1100, 400];
 // options for the chart
 
 
// options
legend: boolean = true;

animations: boolean = true;
xAxis: boolean = true;
yAxis: boolean = true;
 single:StatModel[];
 single2:StatModel[];

 colorScheme = {
   domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
 };

 //pie
 showLabels = true;

 

constructor(private service: EventService, private translate:TranslateService) { translate.addLangs(['en', 'fr']);
translate.setDefaultLang('fr');
let currentLanguage = window.localStorage.getItem("currentLang");
if((currentLanguage != null) && translate.getLangs().includes(currentLanguage.toLowerCase())) {
  translate.use(currentLanguage.toLowerCase());
} ;}
showXAxis = true;
showYAxis = true;
gradient = false;
showLegend = true;
showXAxisLabel = true;
xAxisLabel = "Événement";
showYAxisLabel = true;
yAxisLabel =  "Profit"
yAxisLabel1 =  this.translate.instant('stat.prix');

timeline = true;

ngOnInit() {

  this.service.getStat().subscribe(
      data => { this.single2= data; 
      },
      error => { console.log(error); });
      this.service.getStat1().subscribe(
        data => { this.single= data; 
        },
        error => { console.log(error); });
    
}

onSelect(event) {
  console.log(event);
}

}


