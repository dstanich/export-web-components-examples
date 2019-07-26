import {
  Component,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.component.html',
  styleUrls: ['./add-grocery.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AddGroceryComponent {
  @Output() groceryAdded: EventEmitter<string> = new EventEmitter();
  item: string;

  constructor() {}

  addItem(name: string) {
    this.groceryAdded.emit(name);
    this.item = '';
  }
}
