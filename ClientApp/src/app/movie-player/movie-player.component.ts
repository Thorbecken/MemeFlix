import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-player',
  templateUrl: './movie-player.component.html',
  styleUrls: ['./movie-player.component.css']
})
export class MoviePlayerComponent implements OnInit {

  @Input() videoUrl: string;

  constructor() { }

  ngOnInit() {
  }

}
