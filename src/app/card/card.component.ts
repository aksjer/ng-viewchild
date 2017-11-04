import { Component, OnInit, Input, ContentChild, ElementRef, AfterContentInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, AfterContentInit, AfterViewInit {

  @Input() text: string;
  @ContentChild('inside') inside: ElementRef;
  @ViewChild('inside') insidez: ElementRef;
  @ContentChild('mycard') mycard: ElementRef;
  @ViewChild('mycard') mycardz: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    // this.conlog();
  }

  ngAfterViewInit() {
    // this.conlog();
  }

  conlog() {
    // console.log('content : ', this.filter);
    // console.log('view : ', this.filterz);
    // console.log('content : ', this.inside);
    // console.log('view : ', this.insidez);
    console.log('content : ', this.mycard);
    console.log('view : ', this.mycardz);
  }

}
