import { Component, OnInit } from '@angular/core';
import {AppShopComponent} from './app-shop.component';
import {AppAdventureComponent} from './app-adventure.component';
import {JournalComponent} from './journal.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
