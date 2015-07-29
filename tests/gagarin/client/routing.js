describe('Routing', function(){
  var server = meteor();
  var client = browser(server);

  it('should be on home page by default', function () {
    return client
            .getText('h2')
            .then(function (title) {
              expect(title).to.equal('Home Index');
            });
  });

  it('should route to not found', function () {
    return client
            .execute(function () {
              Router.go('/404');
            })
            .getText('h2')
            .then(function (title) {
              expect(title).to.equal('Not Found');
            });
  });

});
