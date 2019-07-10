import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
import { CustomersTableComponent } from './customers-table.component';
import { DiscountComponent } from './discount.component';

@NgModule({
  declarations: [CustomersTableComponent, DiscountComponent],
  imports: [BrowserModule, FormsModule],
  entryComponents: [CustomersTableComponent, DiscountComponent],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const elements: any[] = [
      [CustomersTableComponent, 'customers-table-ce'],
      [DiscountComponent, 'discount-ce']
    ];

    for (const [component, name] of elements) {
      const el = createCustomElement(component, {
        injector: this.injector
      });

      customElements.define(name, el);
    }
  }
}
