import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-items-card',
  templateUrl: './items-card.component.html',
  styleUrls: ['./items-card.component.scss'],
  animations:[
    trigger('changeAnimation',[
      state('initial',style({
        opacity:1,
      })),
      state('final',style({
        opacity:0.2
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))

    ])]
  })
export class ItemsCardComponent implements OnInit {

  currentState="initial"
  constructor() { }

  ngOnInit() {
  }

  changeState(){
    this.currentState=this.currentState === 'initial'? 'final' : 'initial'
  }
}
