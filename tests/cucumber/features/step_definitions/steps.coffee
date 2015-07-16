do ->
  module.exports = ->
    url = require 'url'
    HOME_URL = '/'

    @Given /^I am on the home page$/, (callback) ->
      @browser.url(url.resolve(process.env.ROOT_URL, HOME_URL)).call callback

    @When /^I click "([^"]*)"$/, (link, callback) ->
      @browser.click(link).call callback

    @Then /^I should be logged in$/, (callback) ->
      callback.pending()
