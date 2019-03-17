package spree.utils;

import org.openqa.selenium.WebDriver;

public class StepsBase {

    protected WebDriver driver = DriverFactory.getInstance(PropertyReader.getInstance().getEnvProperty("chrome")).getDriver();
	 //public static WebDriver driver = null;
}

