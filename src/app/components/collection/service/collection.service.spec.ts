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

  it('should return correct initial BehaviorSubject', () => {
    service.duplicateNameError$.subscribe((response) => {
      expect(response).toEqual({ error: null });
    });
  });

  it('should correctly implement sendErrorAsTrue method', () => {
    service.sendErrorAsTrue();
    expect(service.errorStatus).toBe(true);
  });

  it('should correctly implement sendErrorAsNull method', () => {
    service.sendErrorAsNull();
    expect(service.errorStatus).toBe(null);
  });

  it('should send updated root collection data', fakeAsync(() => {
    const rootCollection = data;
    service.updatedRootCollection$.subscribe((updatedData) => {
      expect(updatedData).toEqual(rootCollection);
    });
    service.sendUpdatedRootCollection(rootCollection);
  }));
});
