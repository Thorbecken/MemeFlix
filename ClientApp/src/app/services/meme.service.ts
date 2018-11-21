import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, Observer, throwError } from 'rxjs';
import { IMeme, Meme } from '../shared/models/meme';
import { Response, Headers } from '@angular/http';
import { catchError, retry } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class MemeService {

  constructor(private http: HttpClient) {
  }

  getMemes(): Observable<IMeme[]> {
    return this.http.get<IMeme[]>('https://localhost:44333/api/EmbeddedVideo/Memes');
  }

  postMeme(meme: IMeme) {
    console.log(meme);
    return this.http.post<any>('https://localhost:44333/api/Memes', meme);
  }
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
