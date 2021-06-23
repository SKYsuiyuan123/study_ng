/*
 * @Author: sunpeiyuan
 * @Date: 2021-05-23 18:52:29
 * @LastEditors: sunpeiyuan
 * @LastEditTime: 2021-06-24 00:16:21
 * @Description: 路由配置模块
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';

import { NewsComponent } from './components/news/news.component';
import { NewsIdComponent } from './components/newsId/newsId.component';
import { NewsContentComponent } from './components/news-content/news-content.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'news',
    component: NewsComponent,
    children: [
      {
        path: 'news-detail',
        component: NewsDetailComponent,
      },
      {
        path: ':id',
        component: NewsIdComponent,
      },
      {
        path: '',
        component: NewsComponent,
      },
    ],
  },
  {
    path: 'news-content',
    component: NewsContentComponent,
  },
  // {
  //   path: 'news-content/:id',
  //   component: NewsContentComponent,
  // },
  {
    path: 'product',
    component: ProductComponent,
  },
  // 匹配不到路由的时候加载的组件 或者 跳转的路由
  {
    path: '**', // 任意的路由

    // 这里写路由或者组件的效果 是不一样的，
    // 组件的写法，路由会 停留在 / 上；跳转的路由的写法，会让 路由直接跳转到 目标路由上。
    // component: HomeComponent,
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
