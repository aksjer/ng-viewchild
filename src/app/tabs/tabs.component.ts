import { TabComponent } from './../tab/tab.component';
import { Component, OnInit, Input, ContentChildren, QueryList, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    console.log(this.tabs);
    this.tabs.changes.subscribe(v => console.log('changes', v));
  }


}
