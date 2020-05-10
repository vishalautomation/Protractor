describe("mysuite", function() {
	
	
	beforeEach(function() {
		
		browser.manage().window().maximize()
		browser.get("https://dassdevarajan.github.io/demo-app/")
		
		
	})
	
	xit("Webtable", function() {
		
		
		element(by.id("view")).click()
		browser.sleep(3000)
	})
	
	  xit("get text", function() {
		
		var txt = element(by.xpath("//td[contains(text(),' HP 14 Core i3 Laptop ')]")).getText().then(function(name) {
			expect(name).toBe("HP 14 Core i3 Laptop")
			console.log(name)
		})
	})
	
	
	
	xit("getrow", function() {
		
		var txt = element.all(by.tagName("tr")).get(1).getText().then(function(text) {
			console.log(text)
		
		})
	})
	
})
