
var newItem;
var newList;
var oldItem;

describe('ShoppingListItem', function() {

  beforeEach(function() {
    newItem = new ShoppingListItem('shampoo', 'cleans hair');
    expect(newItem).to.be.an.instanceof(ShoppingListItem);
  });

  it('should be a function', function() {
    expect(ShoppingListItem).to.exist;
    expect(ShoppingListItem).to.be.an('function');
  });

  it('should have property "name"', function() {
    expect(newItem).to.have.property('name');
    expect(newItem.name).to.equal('shampoo');
  });

  it('should have property "description"', function() {
    expect(newItem).to.have.property('description');
    expect(newItem.description).to.equal('cleans hair');
  });

  it('should have property "is_done"', function() {
    expect(newItem).to.have.property('is_done');
  });

  describe('ShoppingListItem Methods', function() {

    it('should have a method "check"', function() {
      expect(newItem).to.have.property('check');
      expect(newItem.check).to.be.an('function');
      newItem.check();
      expect(newItem.is_done).to.equal(true);
    });

    it('should have a method "uncheck"', function() {
      expect(newItem).to.have.property('uncheck');
      expect(newItem.uncheck).to.be.an('function');
      newItem.uncheck();
      expect(newItem.is_done).to.equal(false);
    });

  });

  it('should have a method "render"', function() {
    console.log(newItem.render());
    expect(newItem).to.have.property('render');
    expect(newItem.render).to.be.an('function');
    expect(newItem.render()).to.equal(
`<li class="completed_${newItem.is_done}">
  <span>${newItem.name}</span>
  <span>${newItem.description}</span>
</li>`);
  });

});

describe('ShoppingList', function() {


  beforeEach(function() {
    newList = new ShoppingList();
    expect(newList).to.be.an.instanceof(ShoppingList);

    newItem = new ShoppingListItem('shampoo', 'cleans hair');
    expect(newItem).to.be.an.instanceof(ShoppingListItem);

    oldItem = new ShoppingListItem('conditioner', 'makes hair smooth and silky');
    expect(oldItem).to.be.an.instanceof(ShoppingListItem);
  });

  it('should be a function', function() {
    console.log(oldItem.render());
    expect(ShoppingList).to.exist;
    expect(ShoppingList).to.be.an('function');
  });

  it('should have property "items"', function() {
    expect(newList).to.have.property('items');
  });

  describe('ShoppingList Methods', function() {

    it('should have method "listReset"', function() {
      expect(newList.listReset).to.exist;
      expect(newList.listReset).to.be.an('function');
      newList.listReset();
      expect(newList.items).to.be.empty;
    });

    it('should have method "addItem"', function() {
      expect(newList.addItem).to.exist;
      expect(newList.addItem).to.be.an('function');
      newList.addItem(newItem);
      expect(newList.items).to.contain(newItem);
    });

    it('addItem should throw appropriate errors', function() {
      expect(newList.addItem.bind(newList, Number)).to.throw(Error);
      expect(newList.addItem.bind(newList, Boolean)).to.throw(Error);
      expect(newList.addItem.bind(newList, String)).to.throw(Error);
      expect(newList.addItem.bind(newList, Array)).to.throw(Error);
      expect(newList.addItem.bind(newList, Function)).to.throw(Error);
    });

    it('should have method "removeItem"', function() {
      newList.addItem(newItem);
      expect(newList.removeItem).to.exist;
      expect(newList.removeItem).to.be.an('function');
      newList.removeItem(newItem);
      expect(newList.items).to.not.contain(newItem);
    });

    it('removeItem should pop item if no argument', function() {
      newList.addItem(oldItem);
      newList.addItem(newItem);
      newList.removeItem();
      expect(newList.items).to.not.contain(newItem);
    });

    it('removeItem should throw appropriate errors', function() {
      expect(newList.removeItem.bind(newList, Number)).to.throw(Error);
      expect(newList.removeItem.bind(newList, Boolean)).to.throw(Error);
      expect(newList.removeItem.bind(newList, String)).to.throw(Error);
      expect(newList.removeItem.bind(newList, Array)).to.throw(Error);
      expect(newList.removeItem.bind(newList, Function)).to.throw(Error);
    });

    it('should have a method "render"', function() {
      newList.addItem(oldItem);
      console.log(newList.render());
      expect(newList).to.have.property('render');
      expect(newList.render).to.be.an('function');
      expect(newList.render()).to.equal(
`<ul>
<li class="completed_false">
  <span>conditioner</span>
  <span>makes hair smooth and silky</span>
</li>
</ul>`
);
    });

  });

});