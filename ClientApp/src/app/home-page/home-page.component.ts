import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  title = 'MemeFlix';

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() { }
}
