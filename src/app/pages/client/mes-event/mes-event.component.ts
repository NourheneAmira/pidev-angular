import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { EventService } from '../../event/event.service';
import { Eventt } from '../../event/Eventt';
import { ToastrService } from '../../toastr.service';

@Component({
  selector: 'ngx-mes-event',
  templateUrl: './mes-event.component.html',
  styleUrls: ['./mes-event.component.scss']
})
export class MesEventComponent implements OnInit {
  classem:Eventt[]=[];
  retrievedImage: any;
base64Data: any;



constructor( private windowService: NbWindowService,
              private toastrS:ToastrService,
              private eventService:EventService,
               ) { }

ngOnInit() {
  localStorage.setItem('idP','1');
  let id=localStorage.getItem('idP')
  
  this.eventService.getAllEventByParent(+id).subscribe(
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
