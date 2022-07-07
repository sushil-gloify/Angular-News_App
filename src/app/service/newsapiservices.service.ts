import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }




  newsApiUrl = "https://jsonplaceholder.typicode.com/photos";
  // topheading
  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

}

//https://jsonplaceholder.typicode.com/posts