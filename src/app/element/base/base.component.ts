import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent  implements OnInit {
  stats: any = [
    {
      metric: 'Base',
      value: 0
    },
    {
      metric: 'Base',
      value: 0
    },
    {
      metric: 'Base',
      value: 0
    }
  ]
  constructor() { }

  ngOnInit() {}

}
