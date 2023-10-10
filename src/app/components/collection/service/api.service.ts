import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'https://folder-structure-api.onrender.com';
  constructor(private httpClient: HttpClient) {}

  getData() {
    return this.httpClient.get(this.baseUrl);
  }

  addToRoot(folder: { value: string }) {
    return this.httpClient.post(`${this.baseUrl}/initialize-root`, folder);
  }

  addFolderFile(body: {
    value: string;
    type: 'folder' | 'file';
    parent: string;
  }) {
    return this.httpClient.post(this.baseUrl, body);
  }
}
