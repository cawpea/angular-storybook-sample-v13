import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-children-decrator-sample-child',
  templateUrl: './view-children-decrator-sample-child.component.html',
  styleUrls: ['./view-children-decrator-sample-child.component.scss'],
})
export class ViewChildrenDecratorSampleChildComponent implements OnInit {
  @Input() index: number;

  poem: string;

  constructor() {}

  ngOnInit(): void {}
}
