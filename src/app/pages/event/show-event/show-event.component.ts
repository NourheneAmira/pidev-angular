import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Eventt } from '../Eventt';

@Component({
  selector: 'ngx-show-event',
  templateUrl: './show-event.component.html',
  styleUrls: ['./show-event.component.scss']
})
export class ShowEventComponent implements OnInit {
  
  event = new Eventt();
  retrievedImage: any;
  base64Data: any;
 
  selected :any;
  readonly:boolean;
  ev:any;
  
 

   
  constructor(private eventService:EventService,
              ) { }

  ngOnInit() {
    

    let id = localStorage.getItem('idEvent');
    
  
   
   
    this.eventService.getEventById(+id).subscribe(
      data => {
        this.event = data;
          this.base64Data = this.event.photo;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
         /* if(this.agriculteur.etatEvaluation==true)
            {this.readonly=true}
         else{ this.readonly=false}*/
      },
     error => {
         console.log('erreur');
     });
     
  }
}


  
