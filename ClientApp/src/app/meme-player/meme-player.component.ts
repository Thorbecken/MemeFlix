import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-meme-player',
  templateUrl: './meme-player.component.html',
  styleUrls: ['./meme-player.component.css']
})
export class MemePlayerComponent implements OnInit {
  memeList = [
    {
      name: "trololo",
      url:'oavMtUWDBTM'
    },
    {
      name: "rickroll",
      url: 'dQw4w9WgXcQ'
    },
    {
      name: "darude - sandstorm",
      url: 'y6120QOlsfU'
    }
  ]
  //public meme = "dQw4w9WgXcQ"
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getEmbeddedUrl(meme) {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + meme.url + "?ecver=2");
  }

}
