import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Folder Structure Maker';
  isAddFolderClicked = false;

  onAddFolderClicked(eventData: { isAddFolderClicked: boolean }) {
    console.log(eventData.isAddFolderClicked);
    this.isAddFolderClicked = eventData.isAddFolderClicked;
  }

  onCloseModal(isCloseModal: any) {
    this.isAddFolderClicked = !isCloseModal;
  }
}
