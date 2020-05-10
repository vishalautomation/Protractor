let Loginpage = require("../CRMPRO pages/Loginpage")


describe("CRMPRO suite", function() {
	
	it("Logintest", function() {
		
		
		browser.manage().window().maximize()
		browser.waitForAngularEnabled(false)
		Loginpage.get("https://www.crmpro.com/index.html")
		Loginpage.setUsername("batchautomation")
		Loginpage.setPasword("Test@12345")
		Loginpage.clickloginBtn()
		
		
	})
	
	it("Logouttest", function() {
		
		Loginpage.clicklogoutBtn()
		
	})
	
	
})