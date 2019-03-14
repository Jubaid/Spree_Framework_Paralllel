package spree.steps;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import spree.controller.ApplicationController;
import spree.utils.SeleniumUtils;
import spree.utils.StepsBase;

public class CartPageSteps extends StepsBase {
	
	private ApplicationController spree = new ApplicationController(driver);
    private SeleniumUtils util = new SeleniumUtils(driver);

	@When("User click the bags categories link")
	public void user_click_the_bags_categories_link() {
	    // Write code here that turns the phrase above into concrete actions
	    spree.cartPage().clickCartLink();
	}

	@Then("Bags categories page should display")
	public void bags_categories_page_should_display() {
	    // Write code here that turns the phrase above into concrete actions
	    spree.cartPage().verifyBagsPageTitle();
	}

	@When("User select ruby on rails bag item")
	public void user_select_ruby_on_rails_bag_item() {
	    // Write code here that turns the phrase above into concrete actions
	    spree.cartPage().selectProduct();
	}

	@Then("Ruby on rails bag page should display")
	public void ruby_on_rails_bag_page_should_display() {
	    // Write code here that turns the phrase above into concrete actions
		spree.cartPage().rubybagPageTitle();
	}

	@When("User Select the quantity")
	public void user_Select_the_quantity() {
	    // Write code here that turns the phrase above into concrete actions
	    spree.cartPage().selectProductQuantity("3");
	}

	@When("Click the add to cart button")
	public void click_the_add_to_cart_button() {
	    // Write code here that turns the phrase above into concrete actions
	    spree.cartPage().addToCartButton();
	}

}
