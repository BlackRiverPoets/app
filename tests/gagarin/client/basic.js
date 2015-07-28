describe('Basic Test - Client', function () {
  var server = meteor();
  var client = browser(server);

  it('should initialize object', function () {
    var name = 'some-name';
    client.execute(function () {
      return new Basic(name);
    }).then(function (basic) {
      return basic.name === name;
    });
  })

});
