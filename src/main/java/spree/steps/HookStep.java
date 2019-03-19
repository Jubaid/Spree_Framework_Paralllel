package spree.steps;

import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.ChromeDriverManager;
import spree.utils.DriverFactory;
import spree.utils.PropertyReader;
import spree.utils.StepsBase;

public class  HookStep extends StepsBase {

    @Before
    public void setUp() {
        ChromeDriverManager.chromedriver().setup();
        //driver = new ChromeDriver();	
        driver = DriverFactory.getInstance(PropertyReader.getInstance().getProperty("BROWSER")).getDriver();
		System.out.println(driver);
        //driver.get("http://spree.shiftedtech.com/");

    }
    @After
    public void tearDown() {
        DriverFactory.getInstance().removeDriver();
    }
}

