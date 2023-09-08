import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileFolderInputComponent } from './file-folder-input/file-folder-input.component';
import { AddRootFolderComponent } from './add-root-folder/add-root-folder.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [AppComponent, CollectionComponent, FileFolderInputComponent, AddRootFolderComponent, LayoutComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
