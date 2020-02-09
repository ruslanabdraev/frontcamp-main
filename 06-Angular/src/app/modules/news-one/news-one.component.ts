import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-news-one',
  templateUrl: './news-one.component.html',
  styleUrls: ['./news-one.component.scss']
})
export class NewsOneComponent implements OnInit {
  route: ActivatedRoute;
  apiService: ApiService;
  
  data: any = {
    title: '',
    description: '',
    urlToImage: '',
    publishedAt: ''
  }

  constructor(route: ActivatedRoute, apiService: ApiService) { 
    this.route = route;
    this.apiService = apiService;
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");

    this.apiService.getNews("local")
    .then(response => response.json())
    .then(data => {
      const values = data.filter(item => item.id == id)[0];
      console.log(values);
      this.data = values;
    });
  }

}
