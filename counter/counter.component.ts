import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit {
count: number = 0;
constructor() { }

ngOnInit(): void { 
}

increment(): void {
  this.count += this.count < 10 ? 1 : 0;
}

decrement(): void {
  this.count -= this.count ? 1 : 0;
}
}