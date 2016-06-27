
describe('ShoppingListItem', function() {
  var newList;

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
    // expect(newList).
  });
});

describe('ShoppingListItem Methods', function() {


})