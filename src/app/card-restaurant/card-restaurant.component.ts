import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-restaurant',
  templateUrl: './card-restaurant.component.html',
  styleUrls: ['./card-restaurant.component.css']
})
export class CardRestaurantComponent implements OnInit {

  @Input() cardRestaurant: any;

  constructor() { }

  ngOnInit() {
  }

}
