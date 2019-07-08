import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { CustomersTableComponent } from './customers-table.component';

@NgModule({
  declarations: [CustomersTableComponent],
  imports: [BrowserModule],
  entryComponents: [CustomersTableComponent],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(CustomersTableComponent, {
      injector: this.injector
    });

    customElements.define('customers-table-ce', el);
  }
}
