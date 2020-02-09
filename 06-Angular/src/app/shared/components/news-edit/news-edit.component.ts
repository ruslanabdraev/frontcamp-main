import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  OnChanges
} from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { ApiService } from "src/app/api.service";
import { RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: "app-news-edit",
  templateUrl: "./news-edit.component.html",
  styleUrls: ["./news-edit.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsEditComponent implements OnInit, OnChanges {
  apiService: ApiService;

  @Input() id: string;
  @Input() title: string;
  @Input() description: string;
  @Input() urlToImage: string;
  @Input() publishedAt: string;

  titleInput = new FormControl(this.title);
  descriptionInput = new FormControl(this.description);
  urlToImageInput = new FormControl(this.urlToImage);
  publishedAtInput = new FormControl(this.publishedAt);

  newsFormGroup: FormGroup = new FormGroup({
    title: this.titleInput,
    desctiption: this.descriptionInput,
    urlToImage: this.urlToImageInput,
    publishedAt: this.publishedAtInput
  });

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  ngOnInit() {
    this.titleInput.setValue(this.title);
    this.descriptionInput.setValue(this.description);
    this.urlToImageInput.setValue(this.urlToImage);
    this.publishedAtInput.setValue(this.publishedAt);

    this.newsFormGroup.valueChanges.subscribe(data => {});
  }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    this.titleInput.setValue(this.title);
    this.descriptionInput.setValue(this.description);
    this.urlToImageInput.setValue(this.urlToImage);
    this.publishedAtInput.setValue(this.publishedAt);
  }

  public submitForm(): void {
    this.apiService.editLocal(
      this.id,
      this.titleInput.value,
      this.descriptionInput.value,
      this.urlToImageInput.value,
      this.publishedAtInput.value
    );
  }
}
