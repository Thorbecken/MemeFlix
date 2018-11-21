import { Component, OnInit, Input } from '@angular/core';
import { IMeme, Meme } from '../../../../shared/models/meme';
import { MemeService } from '../../../../services/meme.service';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meme-creator',
  templateUrl: './meme-creator.component.html',
  styleUrls: ['./meme-creator.component.css']
})
export class MemeCreatorComponent implements OnInit {

  memeForm: FormGroup;

  constructor(
    private _memeService: MemeService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.memeForm = this.formBuilder.group({
      name: [''],
      url: ['']
    });
  }

  submitForm() {
    console.warn('Form value is:', this.memeForm.value);
    this._memeService.postMeme(this.memeForm.value as IMeme).subscribe(
      x => {
        console.log('Observer got a next value: ', x);
        this.router.navigate(['/memeHeaven']);
      },
      err => console.error('Observer got an error: ', err),
      () => console.log('Observer got a complete notification')
    );
  }
}
