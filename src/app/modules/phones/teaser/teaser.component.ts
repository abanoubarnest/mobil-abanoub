import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teaser',
  templateUrl: './teaser.component.html',
  styleUrls: ['./teaser.component.scss']
})
export class TeaserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  brandsList=[
    'apple',
    'asus',
    'dell',
    'google',
    'htc',
    'huawei',
    'lenovo',
    'lg',
    'motorola',
    'nokia',
    'panasonic',
    'samsung',
    'sony',
    'xiaomi'
  ]

}
