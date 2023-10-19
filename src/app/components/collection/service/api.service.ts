import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Collection, CollectionType } from 'src/app/models/collection.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://folder-structure-api.onrender.com';
  constructor(private httpClient: HttpClient) {}

  getCollectionData() {
    return this.httpClient.get(this.baseUrl);
  }

  addFolderToRoot(folder: { value: string }): Observable<Collection[]> {
    return this.httpClient.post<Collection[]>(
      `${this.baseUrl}/initialize-root`,
      folder
    );
  }

  addFolderOrFile(body: {
    value: string;
    type?: CollectionType;
    parent?: string;
  }): Observable<Collection[]> {
    return this.httpClient.post<Collection[]>(this.baseUrl, body);
  }

  deleteFolderOrFile(_id: string): Observable<Collection[]> {
    return this.httpClient.delete<Collection[]>(`${this.baseUrl}/${_id}`);
  }
}
