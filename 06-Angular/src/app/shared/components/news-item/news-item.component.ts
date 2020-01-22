import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {

  @Input() id:string;
  @Input() title:string;
  @Input() description:string;
  @Input() imageUrl: string;
  @Input() date: string;

  constructor() { }

  ngOnInit() {
  }

}
