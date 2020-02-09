import { Injectable, EventEmitter } from '@angular/core';
import { localData } from './store/local'

@Injectable({
    providedIn: 'root'
  })
export class ApiService {

    data = localData;

    onSourceChanged:EventEmitter<string> = new EventEmitter();

    getNews(source:string){
         this.onSourceChanged.emit(source);

        if(source === 'local'){
          return fetch("https://d8e493e8-9623-4e20-9881-9264715f7121.mock.pstmn.io/news");
        }

        return fetch(`https://newsapi.org/v1/articles?source=${source}&apiKey=2ed7982b8edb4e8c8f81f08dfb8889fe`);
    }

    editLocal(id: string, title: string, desc: string, image: string, publishedAt: string){
      const tempData = this.data.filter(item => String(item.id) !== id);
      const data = {
        id: id,
        title: title,
        description: desc,
        urlToImage: image,
        publishedAt: publishedAt
      }
      
      if(tempData)
      {
        this.data = [...tempData, data];
      }
    }

}
