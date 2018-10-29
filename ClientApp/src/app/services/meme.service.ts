import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMeme, Meme } from '../meme';

@Injectable({
  providedIn: 'root'
})
export class MemeService {


  constructor(private http: HttpClient) {
  }

  getMemes(): Observable<IMeme[]> {
    return this.http.get<IMeme[]>('https://localhost:44333/api/EmbeddedVideo/Memes');
  }

  postMeme(meme: Meme): Observable<Meme> {
    console.log(meme);
    return this.http.post<Meme>('https://localhost:44333/api/Memes', meme, httpOptions);
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
