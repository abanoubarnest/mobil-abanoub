import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/item';
import { StarRatingColor } from './star-rating/star-rating.component';

@Component({
  selector: 'app-item-price',
  templateUrl: './item-price.component.html',
  styleUrls: ['./item-price.component.scss']
})
export class ItemPriceComponent implements OnInit {
 @Input() items:Item[]=[]
 rating:number = 3;
 starCount:number = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
