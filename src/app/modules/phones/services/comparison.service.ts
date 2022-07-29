import { Item } from './../../../shared/models/item';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComparisonService {

  constructor(private http:HttpClient) { }
  getData():Observable<Item[]> {
    return this.http.get<Item[]>('/assets/handy.json');
  }
}
