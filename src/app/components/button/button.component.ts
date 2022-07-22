import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string = 'Hello';
  @Input() priority: 'primary' | 'secondary' | 'normal' = 'normal';

  constructor() {}

  ngOnInit(): void {}
}
