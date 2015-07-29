describe('Loader', function () {
  var server = meteor();
  var client = browser(server);

  it('should open the loader', function () {
    return client
            .execute(function () {
              Template.loading.rendered();
            })
            .getText('.loading-message')
            .then(function (text) {
              expect(text).to.equal('Loading Message');
            });
  });

  it('should close the loader', function () {
    return client
            .execute(function () {
              var called = false;
              window.loading = {
                finish: function () {
                  called = true;
                }
              };
              Template.loading.destroyed();
              return called;
            })
            .then(function (called) {
              expect(called).to.be.true
            });
  });
});
