import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import { MemeService } from '../../../services/meme.service';
import { MemeListService } from '../../../services/meme-list.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  title = 'MemeFlix';
  public searchRequest = "";
  public memes = [];
  public memeReview = [];

  constructor(private _memeService: MemeService, private _memeListService: MemeListService) { }

  ngOnInit() {
    this._memeService.getMemes()
      .subscribe(data => this.memes = data);

    this._memeListService.getMemePlaylist("MemeReview")
      .subscribe(data => this.memeReview = data);
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() { }
}
