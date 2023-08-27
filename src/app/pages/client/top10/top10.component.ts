import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { EventService } from '../../event/event.service';
import { Eventt } from '../../event/Eventt';
import { ToastrService } from '../../toastr.service';

@Component({
  selector: 'ngx-top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.scss']
})
export class Top10Component implements OnInit {
  classem:Eventt[]=[];
  retrievedImage: any;
base64Data: any;



constructor( private windowService: NbWindowService,
              private toastrS:ToastrService,
              private eventService:EventService,
               ) { }

ngOnInit() {
  
  this.eventService.getAllEventTop10().subscribe(
    data => {
      this.classem = data;
      for(let e of this.classem)
      {
      
      this.base64Data = e.photo;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
      }
   },
    error => { console.log("error"); });


}


}
