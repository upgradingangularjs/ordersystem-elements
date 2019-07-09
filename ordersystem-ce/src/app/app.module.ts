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
    const customersTableEl = createCustomElement(CustomersTableComponent, {
      injector: this.injector
    });

    customElements.define('customers-table-ce', customersTableEl);

    const discountEl = createCustomElement(DiscountComponent, {
      injector: this.injector
    });

    customElements.define('discount-ce', discountEl);
  }
}
