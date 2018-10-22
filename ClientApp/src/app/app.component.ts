import { Component, Inject, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit, AfterViewInit {
  title = 'MemeFlix';

  public memes: Memes[];
  public videoUrl: string;

  constructor(
    private http: HttpClient,
    private sanitizer: DomSanitizer) {}

  ngOnInit() {
    let id = 'dQw4w9WgXcQ';
    this.videoUrl = `https://www.youtube.com/embed/${id}`;

    //this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/dQw4w9WgXcQ');

    // this.http.get<Memes[]>('https://localhost:44333/api/EmbeddedVideo/Memes').subscribe(
    //   result => {
    //     this.memes = result;
    //   },
    //   error => console.error(error));
  }

  ngAfterViewInit()
  {
    let moviePlayer = document.getElementById('moviePlayer');
    moviePlayer.setAttribute('src', this.videoUrl);
  }

  ngOnDestroy() { }
}


interface Memes {
  url: String
}
