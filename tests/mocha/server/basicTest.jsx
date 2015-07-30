MochaWeb.testOnly(function(){
  describe("Basic test - Server", function(){
    it("should pass", function(){
      chai.assert(Meteor.isServer);
    });
  });
});
