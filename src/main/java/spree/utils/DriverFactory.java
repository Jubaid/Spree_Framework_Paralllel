package spree.utils;

import java.net.MalformedURLException;
import java.net.URL;

import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import io.github.bonigarcia.wdm.ChromeDriverManager;
import io.github.bonigarcia.wdm.FirefoxDriverManager;

public class DriverFactory {
	private static DriverFactory instance = null;
	private ThreadLocal<WebDriver> driverCollection = new ThreadLocal<WebDriver>();
	
	private static String LOCAL_GRID_URL = "http://10.10.20.70:4444/wd/hub";

	public static final String USERNAME = "alif14";
	public static final String AUTOMATE_KEY = "sqhswyXvKthnoWb5xUa3";
	public static final String CLOUD_URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";

	private DriverFactory() {
	}
	
	public static DriverFactory getInstance() {
		return getInstance(null);
	}
	
	public static DriverFactory getInstance(String browser) {
		if(instance == null) {
			instance = new DriverFactory();
		}
		
		if(browser == null) {
			browser = "";
		}
		
		if(instance.driverCollection.get() == null) {
			if(browser.equalsIgnoreCase("chrome")) {
				ChromeDriverManager.chromedriver().setup();
				WebDriver driver = new ChromeDriver();
		        instance.driverCollection.set(driver);
			}
			else if (browser.equalsIgnoreCase("firefox")) {
				FirefoxDriverManager.firefoxdriver().setup();
				WebDriver driver = new FirefoxDriver();
				instance.driverCollection.set(driver);
			}
			else if(browser.equalsIgnoreCase("chrome-grid")) {
				DesiredCapabilities caps = new DesiredCapabilities();
		        caps.setPlatform(Platform.ANY);
		        caps.setBrowserName("chrome");

		        try {
		        	WebDriver driver = new RemoteWebDriver(new URL(LOCAL_GRID_URL),caps);
		            instance.driverCollection.set(driver);
		        } catch (MalformedURLException e) {
		            e.printStackTrace();
		        }
			}
			else if (browser.equalsIgnoreCase("firefox-grid")) {
				DesiredCapabilities caps = new DesiredCapabilities();
		        caps.setPlatform(Platform.ANY);
		        caps.setBrowserName("firefox");

		        try {
		        	WebDriver driver = new RemoteWebDriver(new URL(LOCAL_GRID_URL),caps);
		            instance.driverCollection.set(driver);
		        } catch (MalformedURLException e) {
		            e.printStackTrace();
		        }
			}
			else if(browser.equalsIgnoreCase("chrome-cloud")) {
				DesiredCapabilities caps = new DesiredCapabilities();
			    caps.setCapability("browser", "Chrome");
			    caps.setCapability("browser_version", "73.0");
			    caps.setCapability("os", "OS X");
			    caps.setCapability("os_version", "Mojave");
			    caps.setCapability("resolution", "1920x1080");

				try {
					WebDriver driver = new RemoteWebDriver(new URL(CLOUD_URL), caps);
					instance.driverCollection.set(driver);
				} catch (MalformedURLException e) {
					e.printStackTrace();
				}
			}
			else if(browser.equalsIgnoreCase("CLOUD-CH")) {
				DesiredCapabilities caps = new DesiredCapabilities();
			    caps.setCapability("browser", "Chrome");
			    caps.setCapability("browser_version", "73.0");
			    caps.setCapability("os", "OS X");
			    caps.setCapability("os_version", "Mojave");
			    caps.setCapability("resolution", "1920x1080");

				try {
					WebDriver driver = new RemoteWebDriver(new URL(CLOUD_URL), caps);
					instance.driverCollection.set(driver);
				} catch (MalformedURLException e) {
					e.printStackTrace();
				}
			}
			else {
				ChromeDriverManager.chromedriver().setup();
				WebDriver driver = new ChromeDriver();
			    instance.driverCollection.set(driver);
			}
			
		}
		
		return instance;
	}
	
	public WebDriver getDriver() {
		return driverCollection.get();
	}
	
	// Quits the driver and closes the browser
	public void removeDriver(){
		driverCollection.get().quit();
		driverCollection.remove();
	}
	
}
