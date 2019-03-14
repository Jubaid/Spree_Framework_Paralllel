package spree.controller;

import static org.hamcrest.CoreMatchers.startsWith;
import static org.hamcrest.MatcherAssert.assertThat;
import org.openqa.selenium.WebDriver;
import spree.objects.CartPageObject;

public class CartPageController extends CartPageObject {

	public CartPageController(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
	}
	
	public void clickCartLink() {
		getCart().click();
	}

	public void goToShoppingPage() {
		getContinueShoppingLink().click();
	}

	public void selectProduct() {
		getRailBagLink().click();
	}

	public void selectProductQuantity(String num) {
		getRailsBagQuantity().sendKeys(num);
	}

	public void addToCartButton() {
		getAddToCartButton().click();
	}

	public void clickCheckoutButton() {
		getCheckoutButton().click();
	}

	public void upDate() {
		getUpDateLink().click();
	}

	public void verifyBagsPageTitle() {
		String title = driver.getTitle();
        assertThat(title, startsWith("Categories - Bags - Spree Demo Site"));
	}

	public void rubybagPageTitle() {
		String title = driver.getTitle();
        assertThat(title, startsWith("Ruby on Rails Bag - Spree Demo Site"));
	}


}
