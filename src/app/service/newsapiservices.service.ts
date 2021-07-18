import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http: HttpClient) { }

  // News api url
  newsApiUrl = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=2628f17ddbf04706ad6cb8f2bed5146a'

  // tech news api url
  techApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=2628f17ddbf04706ad6cb8f2bed5146a"

  // topheading()
  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl)
  }

  techNews(): Observable<any> {
    return this._http.get(this.techApiUrl)
  }

}
