import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { LayoutComponent } from './components/layout/layout.component';
import { StoreModule } from '@ngrx/store';
import { BrowserModule, By } from '@angular/platform-browser';
import { CollectionComponent } from './components/collection/collection.component';
import { FileFolderInputComponent } from './components/file-folder-input/file-folder-input.component';
import { AddRootFolderComponent } from './components/add-root-folder/add-root-folder.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: any;
  let element: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CollectionComponent,
        FileFolderInputComponent,
        AddRootFolderComponent,
        LayoutComponent,
      ],
      imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
      providers: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    element = fixture.debugElement;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Folder Structure Maker'`, () => {
    expect(app.title).toEqual('Folder Structure Maker');
  });

  it('should render title', () => {
    fixture.detectChanges();
    expect(
      element.query(By.css('.app-container h1')).nativeElement.textContent
    ).toContain('FOLDER STRUCTURE MAKER');
  });
});
