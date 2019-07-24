import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { AddGroceryComponent } from './add-grocery/add-grocery.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    AddGroceryComponent,
    GroceryListComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  entryComponents: [TitleComponent, AddGroceryComponent, GroceryListComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    // Define all our custom elements
    let el = createCustomElement(TitleComponent, { injector: this.injector });
    customElements.define('angular-title', el);

    el = createCustomElement(AddGroceryComponent, {
      injector: this.injector
    });
    customElements.define('angular-add-grocery', el);

    el = createCustomElement(GroceryListComponent, {
      injector: this.injector
    });
    customElements.define('angular-grocery-list', el);
  }

  ngDoBootstrap() {}
}
