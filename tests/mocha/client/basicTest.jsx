MochaWeb.testOnly(function(){
  describe("Basic test - Client", function(){
    it("should pass", function(){
      chai.assert(Meteor.isClient);
    });
  });
});
