import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionComponent } from './collection.component';
import { provideMockStore } from '@ngrx/store/testing';

describe('CollectionComponent', () => {
  let component: CollectionComponent;
  let fixture: ComponentFixture<CollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionComponent],
      providers: [provideMockStore()],
    });
    fixture = TestBed.createComponent(CollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
