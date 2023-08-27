import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StatModel } from '../e-commerce/Stat';
import { PagesComponent } from '../pages.component';
import { Eventt } from './Eventt';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  url = PagesComponent.urlConfig ;
 
  constructor(protected httpClient: HttpClient) { }

  
  getAllEvent() {
    return this.httpClient.get<Eventt[]>(this.url+'/retriveallevent');
  }
  getAllEventTop10() {
    return this.httpClient.get<Eventt[]>(this.url+'/retrieve-Event-ByNbrParticipants');
  }
  getAllEventByParent(id:number) {
    return this.httpClient.get<Eventt[]>(this.url+'/retrieve-Event-ByParent/'+id);
  }
  getEventById(id: number) {
    return this.httpClient.get<Eventt>(this.url + '/retrieve-event/' + id);
  }
 
  addEvent(uploadImageData:FormData):Observable <any> {
    return this.httpClient.post(this.url+'/add-event/'+1,uploadImageData);
  }
  addParticipant(idParent:number,idEvent:number) {
    return this.httpClient.post(this.url+'/add-participant/'+idParent+'/event/'+idEvent,event);
  }
  AnnulerInterss(idParent:number,idEvent:number) {
    return this.httpClient.post(this.url+'/annuler-Interested/'+idParent+'/event/'+idEvent,event);
  }
  AddInterss(idParent:number,idEvent:number) {
    return this.httpClient.post(this.url+'/add-Interested/'+idParent+'/event/'+idEvent,event);
  }
getStat(){
  return this.httpClient.get<StatModel[]>(this.url + '/Event-ByNbrParticipants');
 
}
getStat1(){
  return this.httpClient.get<StatModel[]>(this.url + '/Event-Stat');
 
}
  updateEvent(eventt:Eventt,id:number):Observable <any> {
    return this.httpClient.put(this.url + '/update-event/'+id ,eventt);
  }

   deleteEvent(id: Number) {
    return this.httpClient.delete(this.url + '/remove-event/' +id);
  }
 
}

