import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMeme } from '../shared/models/meme';

@Injectable({
  providedIn: 'root'
})
export class MemeListService {

  constructor(private http: HttpClient) {
  }

  getMemePlaylist(playList): Observable<IMeme[]> {
    return this.http.get<IMeme[]>('https://localhost:44333/api/EmbeddedVideo/MemePlayList?playList=' + playList)
  }

}
