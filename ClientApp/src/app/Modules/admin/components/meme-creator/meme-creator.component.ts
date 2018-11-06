import { Component, OnInit, Input } from '@angular/core';
import { IMeme, Meme } from '../../../../shared/models/meme';
import { MemeService } from '../../../../services/meme.service';

@Component({
  selector: 'app-meme-creator',
  templateUrl: './meme-creator.component.html',
  styleUrls: ['./meme-creator.component.css']
})
export class MemeCreatorComponent implements OnInit {

  private memeName: string = "";
  private memeUrl: string = "";

  submitMeme() {
    const meme = new Meme();

    meme.name = this.memeName;
    meme.url = this.memeUrl;
    this._memeService.postMeme(meme);
  }

  constructor(private _memeService: MemeService) { }

  ngOnInit() {
  }

}
