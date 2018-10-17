import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import BASE_URL from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MemeFlix';

  public memes: Memes[];
  constructor(private http: HttpClient) { //constructor(private http: HttpClient, @Inject(BASE_URL) baseUrl: string) { 
    http.get<Memes[]>('https://localhost:44333/api/EmbeddedVideo/Memes').subscribe(result => { //    http.get<Memes[]>(baseUrl + 'api/EmbeddedVideo/Memes').subscribe(result => { 
      this.memes = result;
    }, error => console.error(error));
  }
}

interface Memes {
  url: String
}
