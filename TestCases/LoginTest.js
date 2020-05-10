describe("mysuite", function() {
	
	it("logintest", function() {
		
		browser.manage().window().maximize()
		browser.get("http://cafetownsend-angular-rails.herokuapp.com/login")
		element(by.model("user.name")).sendKeys("Luke")
		element(by.model("user.password")).sendKeys("Skywalker")
		element(by.buttonText("Login")).click()
		console.log("User logs in")
		browser.sleep(3000)
		
		var greetmsg = element(by.id("greetings"))
		expect(greetmsg.getText()).toBe("Hello Luke")
		
	})
		
		it("logouttest", function() {
		
		var logout = element(by.className("main-button")).click()
		browser.sleep(3000)
		console.log("User logs out")
		expect(logout.isPresent()).toBe(true)
		
		
	})
	
})
