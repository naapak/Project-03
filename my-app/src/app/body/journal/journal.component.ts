import { Component, OnInit } from '@angular/core';
import {JournalService} from '../../services/journal.service';
import {ModelEntry} from "../../services/journal-entry.component";


@Component({
  moduleId: module.id,
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit{

	ModelEntryData: ModelEntry[] = <ModelEntry[]>[];

  constructor(private journalService: JournalService)  { 


  	// console.log(this.journalService.getJournalData());
  	// this.journalService.getJournalData().then(data => {console.log(data);});
//   console.log(data);

  }
// oninit this.journalData

ngOnInit(): void{

	this.journalData();
	this.owlCarousel();
}
	
//journalData(){} promise.arrayofarraofjournals. 

journalData(): void {

	let JournalDataFromserver: Promise<ModelEntry[]> = this.journalService.getJournalData();

	JournalDataFromserver.then(
		modelEntry => { this.ModelEntryData = <ModelEntry[]>modelEntry; console.log("data:=" + modelEntry); }
		);

}

owlCarousel() {
}

//deal with it. 
}

