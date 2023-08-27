import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbWindowRef, NbWindowService } from '@nebular/theme';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';
import { ToastrService } from '../toastr.service';
import { EventService } from './event.service';
import { Eventt } from './Eventt';
import { ModalEventComponent } from './modal-event/modal-event.component';
import { ShowEventComponent } from './show-event/show-event.component';

@Component({
  selector: 'ngx-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  
  source:any
  
  constructor(private  eventService:EventService ,
                private windowService: NbWindowService,
                private toastrS:ToastrService
               ) {}

  ngOnInit() {
    this.eventService.getAllEvent().subscribe(
      data => { this.source = data; 
      console.log(data)},
      error => { console.log("error"); });
     
  }
  settings = {
    actions: {
      add: false,
      edit: false,
      position: 'right',
      custom: [

        {
          name: 'showAction',
          title: '<i class="nb-sunny" title="Show"></i>',
        },
        {
          name: 'editAction',
          title: '<i class="nb-edit" title="Edit"></i>',
        },
       
       
      ],
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      title: {
        title: 'Title',
        type: 'string',
      },
      description: {
        title: 'Description',
        type: 'float',
      },

      date_event: {
        title: 'Date event',
        type: 'Date',
      },
      entry_price:{
        title: 'Entry price',
        type: 'number',
      }   
    },
    
  };
  addEvent() {
    localStorage.setItem("e","0");
    this.windowService.open(ModalEventComponent, { title: `Ajouter Produit` });  
  }
  onDeleteConfirm(event): void {
    console.log(event.data.id);
    if (window.confirm(`Vous êtes sûre de vouloir supprimer ce produit`)) {
      console.log(event.data.id);
      event.confirm.resolve(this.eventService.deleteEvent(event.data.idEvent).subscribe(
        data => {this.source.filter(p => p !== event.data); } ,
      ));
      
    } else {
      event.confirm.reject();
    }
  }

  
  onCustom(event){
    if (event.action === 'editAction') {
      console.log(event.data.id);
      localStorage.setItem("e", "1");
      localStorage.setItem('idEvent',event.data.idEvent.toString());
      this.windowService.open(ModalEventComponent, {title: 'Modifier Produit', context: event.data.id});
      
    }
    if (event.action === 'showAction') {
      console.log(event.data.id);
      localStorage.setItem('idEvent',event.data.idEvent.toString());
      this.windowService.open( ShowEventComponent, {title: 'Afficher Produit', context: event.data.id});
    }
  }
  openWindow() {
    localStorage.removeItem('e');
    localStorage.removeItem('idEvent');
    localStorage.setItem('e', '0');
    this.windowService.open(ModalEventComponent, {title: 'Ajouter'},
      );
  }
}
