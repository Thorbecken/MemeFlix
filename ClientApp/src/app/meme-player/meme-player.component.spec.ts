import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemePlayerComponent } from './meme-player.component';

describe('MemePlayerComponent', () => {
  let component: MemePlayerComponent;
  let fixture: ComponentFixture<MemePlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemePlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
