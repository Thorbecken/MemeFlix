import { Component, Inject, Input, OnInit, AfterViewInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-meme-player',
  templateUrl: './meme-player.component.html',
  styleUrls: ['./meme-player.component.css']
})
export class MemePlayerComponent implements OnInit {
  @Input('parentData')
  public searchParameter;

  @Input('parentMemes')
  public memes;
  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getEmbeddedUrl(meme) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + meme.url + "?ecver=2");
  }

}
