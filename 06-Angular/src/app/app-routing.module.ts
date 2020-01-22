import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./layouts/default/default.component";
import { HomeComponent } from "./modules/home/home.component";
import { ContactComponent } from "./modules/contact/contact.component";
import { NewsComponent } from './modules/news/news.component';
import { NewsOneComponent } from './modules/news-one/news-one.component';

const routes: Routes = [
  {
    path: "",
    component: DefaultComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "contact", component: ContactComponent },
      { path: "news", component: NewsComponent },
      { path: "news/:id", component: NewsOneComponent  }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
