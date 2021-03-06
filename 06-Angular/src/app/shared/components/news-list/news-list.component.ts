import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service'

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  filterNews: string;
  isLocal: boolean = false;
  newsArray: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {

    
  }

  onSourceSelected(event){

    const sourceId = event.target.value;

    this.isLocal = sourceId === 'local';

    this.apiService.getNews(sourceId)
      .then(response => response.json())
      .then(data => {
        this.newsArray = this.isLocal? data: data.articles;
        console.log(this.newsArray);
      });
  }

  onFilter(filterNews:string){
    const filteredNews = this.newsArray.filter(newsItem => JSON.stringify(newsItem).toLowerCase().indexOf(filterNews.toLowerCase()) !== -1)
    this.newsArray = filteredNews;
  }

  onNewsDelete(event){
    const news = this.newsArray.filter(newsItem => newsItem.id != event);
    this.newsArray = news;
  }

}
