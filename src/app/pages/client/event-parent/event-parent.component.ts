import { Component, OnInit } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { EventService } from '../../event/event.service';
import { Eventt } from '../../event/Eventt';
import { ToastrService } from '../../toastr.service';

@Component({
  selector: 'ngx-event-parent',
  templateUrl: './event-parent.component.html',
  styleUrls: ['./event-parent.component.scss']
})
export class EventParentComponent implements OnInit {
  classem:Eventt[]=[];
    retrievedImage: any;
  base64Data: any;



  constructor( private windowService: NbWindowService,
                private toastrS:ToastrService,
                private eventService:EventService,
                 ) { }

  ngOnInit() {
    localStorage.removeItem('idPar')
  localStorage.setItem('idPar','1')
    this.eventService.getAllEvent().subscribe(
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
AddParticipant(idEvent:number){
  let id=localStorage.getItem('idPar')
  this.eventService.addParticipant(+id,idEvent).subscribe(
  data => {
    
   
 },
  error => { console.log("error"); });


}
AddInter(idEvent:number){
  let id=localStorage.getItem('idPar')
  this.eventService.AddInterss(+id,idEvent).subscribe(
  data => {
    
   
 },
  error => { console.log("error"); });


}
AnnulerInter(idEvent:number){
  
  let id=localStorage.getItem('idPar')
  this.eventService.AnnulerInterss(+id,idEvent).subscribe(
  data => {
    
   
 },
  error => { console.log("error"); });


}

}
