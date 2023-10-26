import { TestBed, fakeAsync } from '@angular/core/testing';
import { CollectionService } from './collection.service';
import { data } from 'src/app/data';

describe('CollectionService', () => {
  let service: CollectionService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollectionService],
    });
    service = TestBed.inject(CollectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send updated root collection data', fakeAsync(() => {
    const rootCollection = data;
    service.updatedRootCollection$.subscribe((updatedData) => {
      expect(updatedData).toEqual(rootCollection);
    });
    service.sendUpdatedRootCollection(rootCollection);
  }));
});
