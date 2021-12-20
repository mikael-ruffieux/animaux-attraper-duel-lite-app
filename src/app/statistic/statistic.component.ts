import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit {
  @Input() text: string;
  @Input() value: string;
  @Input() color?: string;

  constructor() { }

  ngOnInit() {}

}
