import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  title = 'MemeFlix';
  public searchRequest = "";
  public memes = [];

  constructor(private _memeService: MemeService) { }

  ngOnInit() {
    this._memeService.getMemes()
      .subscribe(data => this.memes = data);
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() { }
}
