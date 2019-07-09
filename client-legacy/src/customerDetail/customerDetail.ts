import * as moment from 'moment';

const template = require('./customerDetail.html');

const customerDetailComponent = {
  template: template,
  bindings: {
    customer: '<'
  },
  controller: customerDetailComponentController
};

customerDetailComponentController.$inject = ['addressService', 'orderService'];
function customerDetailComponentController(addressService, orderService) {
  var vm = this;
  vm.title = 'Customer Detail';
  vm.customer = this.customer;

  vm.$onInit = () => {
    vm.address = addressService.getFullAddress(vm.customer);
    return orderService.getOrdersByCustomer(vm.customer.id).then(data => {
      vm.orders = data;
      vm.orders.forEach(order => {
        order.orderDate = moment(order.orderDate).format('MM/DD/YYYY');
      });
    });
  };

  vm.updateDiscount = function($event) {
    vm.customer.discount = $event.detail.discount;
  };
}

export default customerDetailComponent;
