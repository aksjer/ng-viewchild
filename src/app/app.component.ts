import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { Component, OnInit, ContentChild, ElementRef, AfterContentInit, AfterViewInit, ViewChild } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterContentInit, AfterViewInit {

  users: Observable<User[]>;
  tabs = ['tab1', 'tab2'];

  // @ContentChild('filter') filter: ElementRef;
  // @ViewChild('filter') filterz: ElementRef;
  @ContentChild('inside') inside: ElementRef;
  @ViewChild('inside') insidez: ElementRef;
  @ContentChild('mycard') mycard: ElementRef;
  @ViewChild('mycard') mycardz: ElementRef;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.users = this.userService.get();
    // this.conlog();
    setTimeout(() => this.tabs.push('tab3'), 2000);
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
    console.log('content : ', this.inside);
    console.log('view : ', this.insidez);
    console.log('content : ', this.mycard);
    console.log('view : ', this.mycardz);
  }

}
