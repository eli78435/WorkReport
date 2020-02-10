import { Component, OnInit } from '@angular/core';
import { assertNotNull, AssertNotNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {

  reportStarted: Boolean;
  dateTime: Date = new Date();
  start?: Date
  end?: Date

  constructor() { }

  ngOnInit() {
  }

  startReport() {
    console.debug(`start time is ${this.dateTime}`);

    if(this.reportStarted) return;
    
    this.start = this.dateTime;
    this.end = null;
    this.reportStarted = true;

    //todo: save value
  }

  stopReport() {
    console.debug(`end time is ${this.dateTime}`);

    if(! this.reportStarted) return;

    

    this.end = this.dateTime;
    this.reportStarted = false;

    //todo: save value
  }

}
