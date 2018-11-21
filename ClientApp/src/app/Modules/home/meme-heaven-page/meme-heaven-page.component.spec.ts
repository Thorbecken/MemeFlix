import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeHeavenPageComponent } from './meme-heaven-page.component';

describe('MemeHeavenPageComponent', () => {
  let component: MemeHeavenPageComponent;
  let fixture: ComponentFixture<MemeHeavenPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeHeavenPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeHeavenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
