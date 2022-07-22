import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string = 'Hello';
  @Input() priority: 'primary' | 'secondary' | 'normal' = 'normal';
  @Output() onClick = new EventEmitter<Event>();

  constructor() {}

  ngOnInit(): void {}
}
