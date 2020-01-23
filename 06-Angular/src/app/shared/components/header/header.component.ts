import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../../api.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.onSourceChanged.subscribe(source => this.title= source);
  }

}
