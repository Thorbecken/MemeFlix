import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-meme-player',
  templateUrl: './meme-player.component.html',
  styleUrls: ['./meme-player.component.css']
})
export class MemePlayerComponent implements OnInit {

  public meme = "dQw4w9WgXcQ"
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  getEmbeddedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/{{meme}}?ecver=2')
  }

}
