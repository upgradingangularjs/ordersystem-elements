import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  templateUrl: './discount.component.html'
})
export class DiscountComponent {
  @Input() customerDiscount: any;
  @Output() updateDiscount = new EventEmitter();
  editDiscount = false;
  selectedDiscount: any;

  discounts = [
    {
      discountId: 1,
      discountPercent: 10,
      discountName: 'Employee'
    },
    {
      discountId: 2,
      discountPercent: 5,
      discountName: 'Friends & Family'
    },
    {
      discountId: 3,
      discountPercent: 20,
      discountName: 'Famous Drummer'
    }
  ];

  constructor(private cd: ChangeDetectorRef) {}

  editDiscountType() {
    this.editDiscount = true;
    this.cd.detectChanges();
  }

  updateDiscountType() {
    this.updateDiscount.emit({ discount: this.selectedDiscount });
    this.editDiscount = false;
  }
}
