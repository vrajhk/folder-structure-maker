import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { AddFolderFileModalComponent } from './add-folder-file-modal/add-folder-file-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    AddFolderFileModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
