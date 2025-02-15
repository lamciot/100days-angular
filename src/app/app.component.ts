import { Component, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Day1Component } from "./day1/day1.component";
import { Day5Component } from "./day5/day5.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HelloComponent,
    FormsModule,
    CommonModule,
    Day1Component,
    Day5Component
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Angular '+ VERSION.major;
  inputType = 'text';
  show =false;
  user = {
    name:'Chau',
    age:16
  }

  handler() {
    console.log('hello world!',event);
  }
  
}
