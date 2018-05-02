import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@ViewChild('myModal')
public myModal:ElementRef;
openModel() {
  console.log('ss');
  console.log(this.myModal.nativeElement);
  this.myModal.nativeElement.click();
}
closeModel() {
   this.myModal.nativeElement.className = 'modal hide';
}
}
