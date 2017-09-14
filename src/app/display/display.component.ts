import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private dataStudent: SharedService) { }
  StudentCollection:Array<object>;
  number: number;
  FirstName: string;
  LastName: string;
  Program: string;
  Year: number;

  ngOnInit() {
    this.StudentCollection=this.dataStudent.getStudents();
  }

}
