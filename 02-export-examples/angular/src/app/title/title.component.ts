import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TitleComponent {
  @Input() text: string;

  constructor() {}
}
