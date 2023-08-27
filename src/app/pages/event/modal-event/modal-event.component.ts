import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbWindowRef } from '@nebular/theme';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';
import { ToastrService } from '../../toastr.service';
import { EventService } from '../event.service';
import { Eventt } from '../Eventt';

@Component({
  selector: 'ngx-modal-event',
  templateUrl: './modal-event.component.html',
  styleUrls: ['./modal-event.component.scss']
})
export class ModalEventComponent implements OnInit {
  eventt= new Eventt();
  selectedFile: File;
  category=["Birthday","Party","Theatre","Sport","Competition","Dance"]
  etatEvent=["terminé","en_cours","a_venir"];
  location=["terrainsport","salleevent1","salleevent2","sallevent3","sallevent4","salletheatre"]
  typEvent=["Kids","Public"]
  code:String;
  A: String
  

  constructor(public windowRef: NbWindowRef,
    private router: Router,
    private eventService: EventService,
    private toastrS : ToastrService) { }

  ngOnInit() {
    let e = localStorage.getItem('e');
    this.eventt = new Eventt();
    if (e === '0') {
      this.A = 'Ajouter';
    }
    if (e === '1') {
      this.A = 'Modifier';
      let id = localStorage.getItem('idEvent');
      console.log(id);
      this.eventService.getEventById(+id).subscribe(
      
        data => { 
          
          this.eventt = data;
         
          console.log(data);
        },
        error => {
          console.log('erreur');
        });
         
    }

    
  }

  close() {
    this.windowRef.close();
    this.router.navigate(['/pages/agriculteurs']);
  }

  onAddEvent() {
    let e = localStorage.getItem('e');
    if (e === '0') {
      //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    console.log('kkkkkk',this.eventt)
    const user=this.eventt;
    console.log('kkkkkk',user)
    uploadImageData.append('imageFile',this.selectedFile);
    uploadImageData.append('user',JSON.stringify(user));
    console.log(uploadImageData);
    console.log('kkkkkk',uploadImageData);

    this.eventService.addEvent(uploadImageData)
    .subscribe(data => {
      localStorage.removeItem('e');
      localStorage.removeItem('idEvent');
      this.windowRef.close();
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
      this.router.navigate(['/pages/event']));
      this.toastrS.makeToast(NbToastStatus.SUCCESS,"succe","succe");
    },
      error => {
        console.log('error');
        this.toastrS.makeToast(NbToastStatus.DANGER,"error","error");
      });
    }
    if (e === '1') {
      const uploadImageData = new FormData();
    console.log('kkkkkk',this.eventt)
    const user=this.eventt;
    console.log('kkkkkk',user)
    uploadImageData.append('imageFile',this.selectedFile);
    uploadImageData.append('user',JSON.stringify(user));
    console.log(uploadImageData);
    console.log('kkkkkk',uploadImageData);

      this.eventService.updateEvent(this.eventt,this.eventt.idEvent).subscribe(
        data => {
          localStorage.removeItem('e');
          localStorage.removeItem('idEvent')
          this.windowRef.close();
          this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
          this.router.navigate(['/pages/event']));
          this.toastrS.makeToast(NbToastStatus.SUCCESS,'SUCCESS',"succe");

        },
        error => {
          console.log('error');
          this.toastrS.makeToast(NbToastStatus.DANGER,'ERROR',"succe");
           });
    }
  }
  
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
 

}
