import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ajouter',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  titleToAdd = new FormControl('');
  priceToAdd = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const newTitle = this.titleToAdd.value;
    const newPrice = this.priceToAdd.value;
    console.log("newTitle : " + newTitle);
    console.log("newPrice : " + newPrice);
  }

}