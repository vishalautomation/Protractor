describe("mysuite", function() {
	
beforeEach(function() {
	
		browser.waitForAngularEnabled(false)
		browser.manage().window().maximize()
		browser.get("http://demo.automationtesting.in/Register.html")
		
		

	})
	
	it("mousehover", function() {
	
		
		
		var interactions = element(by.xpath("//a[contains(text(),'Interactions')]"))
		
		var selectable = element(by.xpath("//a[contains(text(),'Selectable')]"))
		
		browser.actions().mouseMove(interactions).mouseMove(selectable).click().perform()
			
		
	})
	
})