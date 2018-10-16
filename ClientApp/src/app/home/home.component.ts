import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
}

export class FetchHomeComponent {
  public memes: Memes[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Memes[]>(baseUrl + 'api/EmbeddedVideo/Memes').subscribe(result => {
      this.memes = result;
    }, error => console.error(error));
  }
}

interface Memes {
  url: String;
}
