import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class ApiService {

    onSourceChanged:EventEmitter<string> = new EventEmitter();

    getNews(source:string){
         this.onSourceChanged.emit(source);

        if(source === 'local'){
          return fetch(`https://newsapi-frontcapm.netlify.com/.netlify/functions/server/news`);
        }

        return fetch(`https://newsapi.org/v1/articles?source=${source}&apiKey=2ed7982b8edb4e8c8f81f08dfb8889fe`);
    }
}