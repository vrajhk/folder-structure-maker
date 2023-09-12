import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileFolderInputComponent } from './components/file-folder-input/file-folder-input.component';
import { AddRootFolderComponent } from './components/add-root-folder/add-root-folder.component';
import { LayoutComponent } from './components/layout/layout.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppReducer } from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    FileFolderInputComponent,
    AddRootFolderComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
