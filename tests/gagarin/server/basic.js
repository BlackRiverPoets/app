describe('Basic Test - Server', function () {
  var server = meteor();

  it('should initialize object', function () {
    var name = 'some-name';
    server.execute(function () {
      return new Basic(name);
    }).then(function (basic) {
      expect(basic.name).to.equal(name);
    });
  })

});
