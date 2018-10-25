import { TestBed } from '@angular/core/testing';

import { MemeListService } from './meme-list.service';

describe('MemeList.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemeListService = TestBed.get(MemeListService);
    expect(service).toBeTruthy();
  });
});
