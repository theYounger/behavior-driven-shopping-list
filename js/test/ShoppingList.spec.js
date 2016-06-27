var newList;

describe('ShoppingListItem', function() {

  beforeEach(function() {
    newList = new ShoppingListItem('Donald Trump', 'Republican Nominee');
    expect(newList).to.be.an.instanceof(ShoppingListItem);
  });

  it('should be a function', function() {
    expect(ShoppingListItem).to.exist;
    expect(ShoppingListItem).to.be.an('function');
  });

  it('should have property "name"', function() {
    expect(newList).to.have.property('name');
    expect(newList.name).to.equal('Donald Trump');
  });

  it('should have property "description"', function() {
    expect(newList).to.have.property('description');
    expect(newList.description).to.equal('Republican Nominee');
  });

  it('should have property "is_done"', function() {
    expect(newList).to.have.property('is_done');
  });
});

describe('ShoppingListItem Methods', function() {

  beforeEach(function() {
    newList = new ShoppingListItem('Donald Trump', 'Republican Nominee');
    expect(newList).to.be.an.instanceof(ShoppingListItem);
  });

  it('should have a method "check"', function() {
    expect(newList).to.have.property('check');
    expect(newList.check).to.be.an('function');
    newList.check();
    expect(newList.is_done).to.equal(true);
  });

  it('should have a method "uncheck"', function() {
    expect(newList).to.have.property('uncheck');
    expect(newList.uncheck).to.be.an('function');
    newList.uncheck();
    expect(newList.is_done).to.equal(false);
  });

});