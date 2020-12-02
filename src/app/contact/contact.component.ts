import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  input1 = "";
  input2 = "";
  input3 = "";

  constructor() { }

  ngOnInit(): void {
  }

  printValues(){
    console.log("Input1: " + this.input1);
    console.log("Input2: " + this.input2);
    console.log("Input3: " + this.input3);
  }

}
