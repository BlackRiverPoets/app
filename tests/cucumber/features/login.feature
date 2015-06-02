Feature: Login

  As a poet
  I want to login to the app
  So that I can participate in a duel

  Background:
    Given I am on the home page

  @dev
  Scenario:
    And I click "Signup / Login"
    And I click "Authenticate with Twitter"
    Then I should be logged in
