package spree.controller;

import org.openqa.selenium.WebDriver;
import spree.objects.LoginPageObject;
import spree.utils.SeleniumUtils;

import static org.hamcrest.CoreMatchers.startsWith;
import static org.hamcrest.MatcherAssert.assertThat;

public class LoginPageController extends LoginPageObject {

	SeleniumUtils utils = new SeleniumUtils(driver);
	
    public LoginPageController(WebDriver driver) {
        super(driver);
    }

    public void login(String email, String password) {
        getEmailTextBox().sendKeys(email);
        getPasswordTextBox().sendKeys(password);
        getLoginButton().click();
        utils.delayFor(2000);
    }

    public void verifyLoginPageTitle() {

        String title = driver.getTitle();
        assertThat(title, startsWith("Login - Spree Demo Site"));
    }

    public void verifyLoginFailure() {

        String message = getLoginNotAssertion().getText();
        assertThat(message, startsWith("Invalid email or password"));
    }

    public void goToCreateAccountPage() {
        getCreateAccount().click();
    }

    public void enterEmail(String email){
        getEmailTextBox().clear();
        getEmailTextBox().sendKeys(email);
    }

    public void enterPassword(String password){
        getPasswordTextBox().clear();
        getPasswordTextBox().sendKeys(password);
    }

    public void clickLoginButton(){
        getLoginButton().click();
    }

}
