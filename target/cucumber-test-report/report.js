$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/spree/features/CartPage.feature");
formatter.feature({
  "name": "Add to cart functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Not a validated user",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.not_a_validated_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User browse to the site",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_browse_to_the_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Spree home page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.spree_home_page_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "1.User Add the product to shopping cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User click the bags categories link",
  "keyword": "When "
});
formatter.match({
  "location": "CartPageSteps.user_click_the_bags_categories_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Bags categories page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CartPageSteps.bags_categories_page_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select ruby on rails bag item",
  "keyword": "When "
});
formatter.match({
  "location": "CartPageSteps.user_select_ruby_on_rails_bag_item()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ruby on rails bag page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "CartPageSteps.ruby_on_rails_bag_page_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Select the quantity",
  "keyword": "When "
});
formatter.match({
  "location": "CartPageSteps.user_Select_the_quantity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click the add to cart button",
  "keyword": "And "
});
formatter.match({
  "location": "CartPageSteps.click_the_add_to_cart_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/java/spree/features/login.feature");
formatter.feature({
  "name": "Spree login functionality",
  "description": "         This explain how verious login functionality will work\n         Only valid user should be able to login",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Not a validated user",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.not_a_validated_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User browse to the site",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_browse_to_the_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Spree home page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.spree_home_page_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "1.Valid user with valid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User click login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_click_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Browser display Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.browser_display_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter user email as \"shiftqa1@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enter_user_email_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter password as \"shiftedtech\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enter_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.home_page_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login success message display",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.login_success_message_display()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Not a validated user",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.not_a_validated_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User browse to the site",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_browse_to_the_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Spree home page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.spree_home_page_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "2.Invalid user with Invalid password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User click login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_click_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Browser display Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.browser_display_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter user email as \"shiftqa1@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enter_user_email_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter password as \"shiftedtechxxx\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enter_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Browser display Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.browser_display_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login fail message display",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.login_fail_message_display()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "3.Valid user with valid password Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User click login link",
  "keyword": "When "
});
formatter.step({
  "name": "Browser display Login page",
  "keyword": "Then "
});
formatter.step({
  "name": "User enter user email as \"\u003cEmailAddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User enter password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.step({
  "name": "Home page should display",
  "keyword": "Then "
});
formatter.step({
  "name": "Login success message display",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "EmailAddress",
        "Password"
      ]
    },
    {
      "cells": [
        "shiftqa1@gmail.com",
        "shiftedtech"
      ]
    },
    {
      "cells": [
        "tc001@gmail.com",
        "000000"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Not a validated user",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.not_a_validated_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User browse to the site",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_browse_to_the_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Spree home page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.spree_home_page_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "3.Valid user with valid password Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User click login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_click_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Browser display Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.browser_display_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter user email as \"shiftqa1@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enter_user_email_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter password as \"shiftedtech\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enter_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.home_page_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login success message display",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.login_success_message_display()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Not a validated user",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.not_a_validated_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User browse to the site",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_browse_to_the_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Spree home page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.spree_home_page_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "3.Valid user with valid password Data Driven",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User click login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_click_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Browser display Login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.browser_display_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter user email as \"tc001@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enter_user_email_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter password as \"000000\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_enter_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Home page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.home_page_should_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login success message display",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.login_success_message_display()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});