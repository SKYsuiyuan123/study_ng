/*
 * @Author: sunpeiyuan
 * @Date: 2021-06-23 23:51:37
 * @LastEditors: sunpeiyuan
 * @LastEditTime: 2021-06-23 23:55:00
 * @Description:
 */
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsIdComponent } from './newsId.component';

describe('NewsIdComponent', () => {
  let component: NewsIdComponent;
  let fixture: ComponentFixture<NewsIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsIdComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
