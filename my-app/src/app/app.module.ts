import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './body/navigation/navigation.component';
import { FooterComponent } from './body/footer/footer.component';
import { JournalComponent } from './body/journal/journal.component';
import { ModelEntry } from './services/journal-entry.component';
import { EntriesComponent } from './services/entries.component';
import { AppShopComponent } from './body/journal/app-shop.component';
import { AppAdventureComponent } from './body/journal/app-adventure.component';
import { ContentComponent } from './body/journal/content.component';
import {JournalService} from './services/journal.service' ;


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    JournalComponent,
    EntriesComponent,
    AppShopComponent,
    AppAdventureComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
