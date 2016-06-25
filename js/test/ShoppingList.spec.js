
describe('ShoppingListItem', function() {
  var newList;

  it('should be a function', function() {
    expect(ShoppingListItem).to.exist;
    expect(ShoppingListItem).to.be.an('function');
  });

  describe('ShoppingListItem Properties', function() {
    beforeEach(function() {
      newList = ShoppingListItem();
    });
    describe('.name', function() {
      it('should be a property available on a new list', function() {
        expect(newList.name).to.exist;
        expect(newList.name).to.be.a('property');
      });
    });
  });
  // it('should have a property named name', function() {
  //   expect(ShoppingListItem).to.have.
  // })
});