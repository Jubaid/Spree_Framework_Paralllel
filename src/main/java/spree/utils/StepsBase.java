package spree.utils;

import org.openqa.selenium.WebDriver;

public class StepsBase {

    protected WebDriver driver = DriverFactory.getInstance(PropertyReader.getInstance().getProperty("BROWSER")).getDriver();
	 //public static WebDriver driver = null;
}

