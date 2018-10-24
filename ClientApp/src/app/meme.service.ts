import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  public memes: Meme[];
  constructor(private http: HttpClient) { //constructor(private http: HttpClient, @Inject(BASE_URL) baseUrl: string) { 
    http.get<Meme[]>('https://localhost:44333/api/EmbeddedVideo/Memes').subscribe(result => { //    http.get<Memes[]>(baseUrl + 'api/EmbeddedVideo/Memes').subscribe(result => { 
      this.memes = result;
    }, error => console.error(error));
  }

  getMemes() {
    return this.memes;
  }

}
interface Meme {
  url: String;
}
