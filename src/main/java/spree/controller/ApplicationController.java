package spree.controller;

import org.openqa.selenium.WebDriver;

public class ApplicationController {

    private WebDriver driver = null;
    private HomePageController homePage;
    private LoginPageController loginPage;
    private CartPageController cartPage;

    public ApplicationController(WebDriver driver) {
        this.driver = driver;
    }

    public HomePageController homePage() {
        if (homePage == null) {
            homePage = new HomePageController(driver);
        }
        return homePage;
    }

    public LoginPageController loginPage() {
        if (loginPage == null) {
            loginPage = new LoginPageController(driver);
        }
        return loginPage;
    }
    
    public CartPageController cartPage() {
    	if(cartPage == null) {
    		cartPage = new CartPageController(driver);
    	}
		return cartPage;
    }

}
