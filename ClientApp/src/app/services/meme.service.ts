import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMeme } from '../meme';

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  constructor(private http: HttpClient) {
  }

  getMemes(): Observable<IMeme[]> {
    return this.http.get<IMeme[]>('https://localhost:44333/api/EmbeddedVideo/Memes')
  }

}
