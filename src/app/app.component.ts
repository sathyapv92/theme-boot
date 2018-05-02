import { Component, ViewChild, QueryList } from '@angular/core';
import { ViewChildren } from '@angular/core';
import { TestComponent } from './test/test.component';
import { AfterViewInit } from '@angular/core';
import { AfterViewChecked } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit,AfterViewChecked{
  ngAfterViewChecked(): void {
    let jokes: TestComponent[] = this.testComponent.toArray(); 
    console.log(jokes);
    console.log(jokes[0].openModel());
  }
  title = 'app';
  @ViewChildren('TestComponent')
  public TestComponent :TestComponent;
  
  @ViewChildren(TestComponent) testComponent: QueryList<TestComponent>; 

  ngAfterViewInit() {
   // console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
    let jokes: TestComponent[] = this.testComponent.toArray(); 
    console.log(jokes);
    console.log(jokes[0].myModal)
  }
}
