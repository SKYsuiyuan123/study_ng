/*
 * @Author: sunpeiyuan
 * @Date: 2021-05-23 19:30:31
 * @LastEditors: sunpeiyuan
 * @LastEditTime: 2021-06-24 00:07:22
 * @Description:
 */
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-news-id',
  templateUrl: './newsId.component.html',
  styleUrls: ['./newsId.component.less'],
})
export class NewsIdComponent implements OnInit {
  constructor(public route: ActivatedRoute, public router: Router) {}

  paramsId: string | undefined;

  ngOnInit(): void {
    console.log(this.route);

    // 获取 get 传值，即问号的方式。
    this.route.queryParams.subscribe((val) => {
      console.log(val);
    });

    // 获取动态路由参数
    this.route.params.subscribe((val) => {
      console.log('动态路由的参数：', val);
      this.paramsId = val?.id;
    });
  }

  // 跳转到 新闻列表页
  toNewsList() {
    // 路由跳转
    // this.router.navigate(['/news']);

    // 加上动态路由
    // this.router.navigate(['/news', '1234']);

    // 加上 get 参数
    const queryParams: NavigationExtras = {
      queryParams: { pid: 123 },
    };

    this.router.navigate(['/news'], queryParams);
  }
}
