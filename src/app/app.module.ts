/*
 * @Author: sunpeiyuan
 * @Date: 2021-05-23 18:52:29
 * @LastEditors: sunpeiyuan
 * @LastEditTime: 2021-06-24 00:12:02
 * @Description: 入口文件
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';

import { NewsComponent } from './components/news/news.component';
// import { NewsContentComponent } from './components/news-content/news-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    ProductComponent,
    // NewsContentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
