import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id;
  titre: string;
  prix: number;
  description: string;
  urlImg: string;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.id = id;
    this.titre = this.dataService.getArticle(id).articleTitle;
    this.prix = this.dataService.getArticle(id).articlePrice;
    this.description = this.dataService.getArticle(id).description;
    this.urlImg = this.dataService.getArticle(id).imgUrl;
  }

}