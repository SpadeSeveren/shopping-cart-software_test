const Cart = require('../src/Cart.js');
const Item = require('../src/Item.js');
const expect = require('chai').expect;

describe('Cart', () => {

  describe('Initialize as empty', () => {
    const cart = new Cart();

    it('Should show correct items', () => {
      expect(cart.items).to.deep.equal([]);
    });
    it('Should show correct price', () => {
      expect(cart.totalPrice).to.be.equal(0);
    });
    it('Should show corect item quantities', () => {
      expect(cart.itemQuantities()).to.be.eql([]);
    });
    it('Should show correct itemzed list', () => {
      expect(cart.itemizedList()).to.be.eql([]);
    });
    it('Should show correct on sale items', () => {
      expect(cart.onSaleItem()).to.be.eql([]);
    });
  });


  describe('Adding one item to cart', () => {
    const cart = new Cart();
    const watch = new Item('Watch', 600, true);

    cart.addItem(watch, 1);

    it('Should show correct items', () => {
      expect(cart.items).to.deep.equal([{ product: watch, qty: 1 }]);
    });
    it('Should show correct price', () => {
      expect(cart.totalPrice).to.be.equal(600);
    });
    it('Should show corect item quantities', () => {
      expect(cart.itemQuantities()).to.be.eql(['Watch - x1']);
    });
    it('Should show correct itemzed list', () => {
      expect(cart.itemizedList()).to.be.eql(['Watch x1 - $600.00']);
    });
    it('Should show correct on sale items', () => {
      expect(cart.onSaleItem()).to.be.eql(['Watch x1 - $600.00']);
    });
  });


  describe('Adding one item to cart where the price is a double', () => {
    const cart = new Cart();
    const watch = new Item('Watch', 599.99, true);

    cart.addItem(watch, 1);

    it('Should show correct items', () => {
      expect(cart.items).to.deep.equal([{ product: watch, qty: 1 }]);
    });
    it('Should show correct price', () => {
      expect(cart.totalPrice).to.be.equal(599.99);
    });
    it('Should show corect item quantities', () => {
      expect(cart.itemQuantities()).to.be.eql(['Watch - x1']);
    });
    it('Should show correct itemzed list', () => {
      expect(cart.itemizedList()).to.be.eql(['Watch x1 - $599.99']);
    });
    it('Should show correct on sale items', () => {
      expect(cart.onSaleItem()).to.be.eql(['Watch x1 - $599.99']);
    });
  });

  describe('Adding one item to cart where the price is zero', () => {
    const cart = new Cart();
    const watch = new Item('Watch', 0, true);

    cart.addItem(watch, 1);

    it('Should show correct items', () => {
      expect(cart.items).to.deep.equal([{ product: watch, qty: 1 }]);
    });
    it('Should show correct price', () => {
      expect(cart.totalPrice).to.be.equal(0);
    });
    it('Should show corect item quantities', () => {
      expect(cart.itemQuantities()).to.be.eql(['Watch - x1']);
    });
    it('Should show correct itemzed list', () => {
      expect(cart.itemizedList()).to.be.eql(['Watch x1 - $0.00']);
    });
    it('Should show correct on sale items', () => {
      expect(cart.onSaleItem()).to.be.eql(['Watch x1 - $0.00']);
    });
  });


  describe('Adding one item to cart where the price is negative', () => {
    const cart = new Cart();
    const watch = new Item('Watch', -600, true);

    cart.addItem(watch, 1);
    it('Should show correct items', () => {
      expect(cart.items).to.deep.equal([]);
    });
    it('Should show correct price', () => {
      expect(cart.totalPrice).to.be.equal(0);
    });
    it('Should show corect item quantities', () => {
      expect(cart.itemQuantities()).to.be.eql([]);
    });
    it('Should show correct itemzed list', () => {
      expect(cart.itemizedList()).to.be.eql([]);
    });
    it('Should show correct on sale items', () => {
      expect(cart.onSaleItem()).to.be.eql([]);
    });
  });


  describe('Adding one item to cart where the price is a string', () => {
    const cart = new Cart();
    const watch = new Item('Watch', 'not an int', true);

    cart.addItem(watch, 1);
    it('Should show correct items', () => {
      expect(cart.items).to.deep.equal([]);
    });
    it('Should show correct price', () => {
      expect(cart.totalPrice).to.be.equal(0);
    });
    it('Should show corect item quantities', () => {
      expect(cart.itemQuantities()).to.be.eql([]);
    });
    it('Should show correct itemzed list', () => {
      expect(cart.itemizedList()).to.be.eql([]);
    });
    it('Should show correct on sale items', () => {
      expect(cart.onSaleItem()).to.be.eql([]);
    });
  });


  describe('Adding one item to cart where the name is an int', () => {
    const cart = new Cart();
    const notWatch = new Item(1337, 600, true);

    cart.addItem(notWatch, 1);
    it('Should show correct items', () => {
      expect(cart.items).to.deep.equal([]);
    });
    it('Should show correct price', () => {
      expect(cart.totalPrice).to.be.equal(0);
    });
    it('Should show corect item quantities', () => {
      expect(cart.itemQuantities()).to.be.eql([]);
    });
    it('Should show correct itemzed list', () => {
      expect(cart.itemizedList()).to.be.eql([]);
    });
    it('Should show correct on sale items', () => {
      expect(cart.onSaleItem()).to.be.eql([]);
    });
  });


  describe('Adding one item to cart where the name is an emoji', () => {
    const cart = new Cart();
    const notWatch = new Item('👌', 600, true);

    cart.addItem(notWatch, 1);
    it('Should show correct items', () => {
      expect(cart.items).to.deep.equal([{ product: notWatch, qty: 1 }]);
    });
    it('Should show correct price', () => {
      expect(cart.totalPrice).to.be.equal(600);
    });
    it('Should show corect item quantities', () => {
      expect(cart.itemQuantities()).to.be.eql(['👌 - x1']);
    });
    it('Should show correct itemzed list', () => {
      expect(cart.itemizedList()).to.be.eql(['👌 x1 - $600.00']);
    });
    it('Should show correct on sale items', () => {
      expect(cart.onSaleItem()).to.be.eql(['👌 x1 - $600.00']);
    });
  });


  describe('Adding one item to cart where onSale is a string', () => {
    const cart = new Cart();
    const watch = new Item('Watch', 600, 'true');

    cart.addItem(watch, 1);
    it('Should show correct items', () => {
      expect(cart.items).to.deep.equal([]);
    });
    it('Should show correct price', () => {
      expect(cart.totalPrice).to.be.equal(0);
    });
    it('Should show corect item quantities', () => {
      expect(cart.itemQuantities()).to.be.eql([]);
    });
    it('Should show correct itemzed list', () => {
      expect(cart.itemizedList()).to.be.eql([]);
    });
    it('Should show correct on sale items', () => {
      expect(cart.onSaleItem()).to.be.eql([]);
    });
  });


  describe('Adding one item to cart where onSale is an int', () => {
    const cart = new Cart();
    const watch = new Item('Watch', 600, 1337);

    cart.addItem(watch, 1);
    it('Should show correct items', () => {
      expect(cart.items).to.deep.equal([]);
    });
    it('Should show correct price', () => {
      expect(cart.totalPrice).to.be.equal(0);
    });
    it('Should show corect item quantities', () => {
      expect(cart.itemQuantities()).to.be.eql([]);
    });
    it('Should show correct itemzed list', () => {
      expect(cart.itemizedList()).to.be.eql([]);
    });
    it('Should show correct on sale items', () => {
      expect(cart.onSaleItem()).to.be.eql([]);
    });
  });


  describe('Adding two identical items to cart', () => {
    const cart = new Cart();
    const watch = new Item('Watch', 600, true);

    cart.addItem(watch, 2);

    it('Should show correct items', () => {
      expect(cart.items).to.deep.equal([{ product: watch, qty: 2 }]);
    });
    it('Should show correct price', () => {
      expect(cart.totalPrice).to.be.equal(1200);
    });
    it('Should show corect item quantities', () => {
      expect(cart.itemQuantities()).to.be.eql(['Watch - x2']);
    });
    it('Should show correct itemzed list', () => {
      expect(cart.itemizedList()).to.be.eql(['Watch x2 - $1,200.00']);
    });
    it('Should show correct on sale items', () => {
      expect(cart.onSaleItem()).to.be.eql(['Watch x2 - $1,200.00']);
    });
  });


  describe('Adding two different items to cart', () => {
    const cart = new Cart();
    const watch = new Item('Watch', 600, true);
    const bag = new Item('Bag', 450, false);

    cart.addItem(watch, 1);
    cart.addItem(bag, 1);

    it('Should show correct items', () => {
      expect(cart.items).to.deep.equal([{ product: watch, qty: 1 }, { product: bag, qty: 1 }]);
    });
    it('Should show correct price', () => {
      expect(cart.totalPrice).to.be.equal(1050);
    });
    it('Should show corect item quantities', () => {
      expect(cart.itemQuantities()).to.be.eql(['Watch - x1', 'Bag - x1']);
    });
    it('Should show correct itemzed list', () => {
      expect(cart.itemizedList()).to.be.eql(['Watch x1 - $600.00', 'Bag x1 - $450.00']);
    });
    it('Should show correct on sale items', () => {
      expect(cart.onSaleItem()).to.be.eql(['Watch x1 - $600.00']);
    });
  });


  describe('Adding the same item to cart twice', () => {
    const cart = new Cart();
    const watch = new Item('Watch', 600, true);

    cart.addItem(watch, 1);
    cart.addItem(watch, 1);

    it('Should show correct items', () => {
      expect(cart.items).to.deep.equal([{ product: watch, qty: 2 }]);
    });
    it('Should show correct price', () => {
      expect(cart.totalPrice).to.be.equal(1200);
    });
    it('Should show corect item quantities', () => {
      expect(cart.itemQuantities()).to.be.eql(['Watch - x2']);
    });
    it('Should show correct itemzed list', () => {
      expect(cart.itemizedList()).to.be.eql(['Watch x2 - $1,200.00']);
    });
    it('Should show correct on sale items', () => {
      expect(cart.onSaleItem()).to.be.eql(['Watch x2 - $1,200.00']);
    });
  });


  describe('Adding the same item to cart twice, but one is on sale and one is not', () => {
    const cart = new Cart();
    const watch1 = new Item('Watch', 600, true);
    const watch2 = new Item('Watch', 1200, false);

    cart.addItem(watch1, 1);
    cart.addItem(watch2, 1);

    it('Should show correct items', () => {
      expect(cart.items).to.deep.equal([{ product: watch1, qty: 1 }, { product: watch2, qty: 1 }]);
    });
    it('Should show correct price', () => {
      expect(cart.totalPrice).to.be.equal(1800);
    });
    it('Should show corect item quantities', () => {
      expect(cart.itemQuantities()).to.be.eql(['Watch - x1', 'Watch - x1']);
    });
    it('Should show correct itemzed list', () => {
      expect(cart.itemizedList()).to.be.eql(['Watch x1 - $600.00', 'Watch x1 - $1,200.00']);
    });
    it('Should show correct on sale items', () => {
      expect(cart.onSaleItem()).to.be.eql(['Watch x1 - $600.00']);
    });
  });

});
