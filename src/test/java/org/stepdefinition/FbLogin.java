package org.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class FbLogin {
	WebDriver driver;
	@Given("user login a Gmail for Browser and Windows Maximize")
	public void user_login_a_Gmail_for_Browser_and_Windows_Maximize() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}

	@When("to get the Website Url in gmail address")
	public void to_get_the_Website_Url_in_gmail_address() {
	  driver.get("https://mail.google.com/");
	}

	@When("User Login in a Valid{string} Gmail address")
	public void user_Login_in_a_Valid_Gmail_address(String email) {
		
	  
	}

	@When("User Login in a Valid {string}Gmail PassWord")
	public void user_Login_in_a_Valid_Gmail_PassWord(String pass) {
	   
	}

	@When("To User Click The Gmail Login Btn")
	public void to_User_Click_The_Gmail_Login_Btn() {
	  
	}

	@Then("Close The Browser")
	public void close_The_Browser() {
	 
	}
}