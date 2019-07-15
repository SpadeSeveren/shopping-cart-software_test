const formatMoney = require('./lib/format_money.js');

module.exports = class Cart {
  constructor() {
    this.items = [];
  }

  get totalPrice() {
    return this.items.reduce((total, item) => {
      return total + item.product.price * item.qty;
    }, 0.00);
  }

  addItem(item, quantity) {
    if (!isNaN(item.price) && item.price >= 0 && typeof item.name === 'string' && typeof item.onSale === 'boolean') {
      let flag = false;
      this.items.some(e => {
        if (e.product === item) {
          e.qty += quantity;
          flag = true;
        }
      });
      if (!flag) {
        this.items.push({ product: item, qty: quantity });
      }
    }
  }

  itemizedList() {
    let arr = [];
    this.items.forEach(item => {
      arr.push(`${item.product.name} x${item.qty} - ${formatMoney.formatMoney(item.product.price * item.qty)}`);
    });
    return arr;
  }

  itemQuantities() {
    let arr = [];
    this.items.forEach(item => {
      arr.push(`${item.product.name} - x${item.qty}`);
    });
    return arr;
  }

  onSaleItem() {
    let arr = [];
    this.items.forEach(item => {
      if (item.product.onSale) {
        arr.push(`${item.product.name} x${item.qty} - ${formatMoney.formatMoney(item.product.price * item.qty)}`);
      }
    });
    return arr;
  }

};
