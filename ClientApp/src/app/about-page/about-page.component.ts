import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  onClick() {
    console.log("Hello world")
    this.aboutText = "Hello world";
    if (this.red) {
      this.red = false;
    }
    else {
      this.red = true;
    }
    }

  public aboutText = "";
  public red = true;
  public italic = true;
  public dynamicStyles = {
    "red": this.red,
    "italic": this.italic
  }

  constructor() { }

  ngOnInit() {
  }

}
