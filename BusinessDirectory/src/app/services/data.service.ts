import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import * as DataActions from "../actions/data.actions";
import { AppSettings } from '../app-settings';
import { Business } from '../models/business';
import { AppState, getAllItems, getDataState } from "../reducers";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private store: Store<AppState>, private http: HttpClient) {}

  loadData() {
    return this.http.get<Business[]>(AppSettings.API_URL);
  }

  load() {
    this.store.dispatch(new DataActions.LoadDataBegin());
  }

  // getData() {
  //   return this.store.select(getDataState);
  // }

  getItems() {
    return this.store.select(getAllItems);
  }
}
