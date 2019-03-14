package spree.steps;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import spree.controller.ApplicationController;
import spree.utils.SeleniumUtils;
import spree.utils.StepsBase;

public class LoginSteps extends StepsBase {

    private ApplicationController spree = new ApplicationController(driver);
    private SeleniumUtils util = new SeleniumUtils(driver);

    @Given("Not a validated user")
    public void not_a_validated_user() {
        // Write code here that turns the phrase above into concrete actions
        driver.manage().deleteAllCookies();
    }

    @When("User browse to the site")
    public void user_browse_to_the_site() {
        // Write code here that turns the phrase above into concrete actions
        driver.navigate().to("http://spree.shiftedtech.com");
    }

    @Then("Spree home page should display")
    public void spree_home_page_should_display() {
        // Write code here that turns the phrase above into concrete actions
        spree.homePage().verifyHomePageTitle();
    }

    @When("User click login link")
    public void user_click_login_link() {
        // Write code here that turns the phrase above into concrete actions
        spree.homePage().goToLoginPage();
    }

    @Then("Browser display Login page")
    public void browser_display_Login_page() {
        // Write code here that turns the phrase above into concrete actions
        spree.loginPage().verifyLoginPageTitle();
    }

    @When("User enter user email as {string}")
    public void user_enter_user_email_as(String string) {
        // Write code here that turns the phrase above into concrete actions
        spree.loginPage().enterEmail(string);
    }

    @When("User enter password as {string}")
    public void user_enter_password_as(String string) {
        // Write code here that turns the phrase above into concrete actions
        spree.loginPage().enterPassword(string);
    }

    @When("User click login button")
    public void user_click_login_button() {
        // Write code here that turns the phrase above into concrete actions
        spree.loginPage().clickLoginButton();
    }

    @Then("Home page should display")
    public void home_page_should_display() {
        // Write code here that turns the phrase above into concrete actions
        spree.homePage().verifyHomePageTitle();
    }

    @Then("Login success message display")
    public void login_success_message_display() {
        // Write code here that turns the phrase above into concrete actions
        spree.homePage().verifyLoginSuccess();
    }

    @Then("Login fail message display")
    public void login_fail_message_display() {
        // Write code here that turns the phrase above into concrete actions
        spree.loginPage().verifyLoginFailure();
    }
}
