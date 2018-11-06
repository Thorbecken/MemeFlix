import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, Observer, throwError } from 'rxjs';
import { IMeme, Meme } from '../shared/models/meme';
import { Response, Headers } from '@angular/http';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MemeService {

  constructor(private http: HttpClient) {
  }

  getMemes(): Observable<IMeme[]> {
    return this.http.get<IMeme[]>('https://localhost:44333/api/EmbeddedVideo/Memes');
  }

  postMeme(meme: Meme){
    console.log(meme);
    this.http.post<any>('https://localhost:44333/api/Memes', meme).subscribe(
      x => console.log('Observer got a next value: ' + x),
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    );
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
