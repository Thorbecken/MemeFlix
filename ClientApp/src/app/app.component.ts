import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'MemeFlix';

  public memes: Memes[];
  public videourl: SafeResourceUrl[];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    let id = 'an-id-goes-here';
    let url = `https://www.youtube.com/embed/${id}`;

    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnDestroy() { }
  public memes: Memes[];
  constructor(private http: HttpClient) { //constructor(private http: HttpClient, @Inject(BASE_URL) baseUrl: string) { 
  http.get<Memes[]>('https://localhost:44333/api/EmbeddedVideo/Memes').subscribe(result => { //    http.get<Memes[]>(baseUrl + 'api/EmbeddedVideo/Memes').subscribe(result => { 
  this.memes = result;
   }, error => console.error(error));
  }


interface Memes {
  url: String
}
