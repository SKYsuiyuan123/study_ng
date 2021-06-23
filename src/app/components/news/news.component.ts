/*
 * @Author: sunpeiyuan
 * @Date: 2021-05-23 18:57:03
 * @LastEditors: sunpeiyuan
 * @LastEditTime: 2021-05-23 20:27:19
 * @Description:
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less'],
})
export class NewsComponent implements OnInit {
  list: number[] = [];

  constructor() {}

  ngOnInit(): void {
    this.list = new Array(10).fill(1).map((item, i) => i);
  }
}
