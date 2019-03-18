package spree.utils;

import org.openqa.selenium.WebDriver;

public class StepsBase {

    protected WebDriver driver = DriverFactory.getInstance(PropertyReader.getInstance().getEnvProperty("CLOUD_BROWSER")).getDriver();
	 //public static WebDriver driver = null;
}

