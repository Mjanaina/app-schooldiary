import { Component, ViewChild } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  Evento = {
    titulo: '',
    descricao: '',
    comeco: '',
    fim: ''
  } 
  allEvents = [];
  minDate = new Date().toISOString();
  currentDate = new Date();
  currentMonth: string;
  @ViewChild(CalendarComponent, {static: false}) myCalendar: CalendarComponent;
  showAddEvent: boolean;

  constructor() {}

  onViewTitleChanged(title: string) {
    this.currentMonth = title;
  }

  showHideForm() {
    this.showAddEvent = !this.showAddEvent;
    this.Evento = {
    titulo: '',
    descricao: '',
    comeco: new Date().toISOString(),
    fim: new Date().toISOString()
  };
}

addEvento() {
  this.allEvents.push({
    title: this.Evento.titulo,
    startTime:  new Date(this.Evento.comeco),
    endTime: new Date(this.Evento.fim),
    description: this.Evento.descricao
    });
  this.showHideForm();
}
  }

  
