describe("mysuite", function() {


	beforeEach(function() {

		browser.manage().window().maximize()
		browser.get("http://www.trycatchclasses.com/code/demo/angular_crud/#")
		browser.sleep(3000)
	})

	    xit("Handling Dropdown", function() {

		var alert = browser.switchTo().alert()
		expect(alert.getText()).toEqual("Error in getting users list")
		alert.accept()

		element(by.model("search.type")).element(by.css("[value='number:5']")).click()
		browser.sleep(3000)

	})
	
	    it("Add New user", function() {
	    	
	    	var alert = browser.switchTo().alert()
	    	alert.accept()
		    
	    	element(by.css("[ng-click='addUser()']")).click()
	    	console.log("Adding new user")
	    	
	    	element(by.model("UserFirstname")).sendKeys("John")
	    	element(by.model("UserActive")).click()
	    	element(by.css("[ng-click='AddUpdateUser()']")).click()
	    	browser.sleep(3000)
	    	
	    	var alert = browser.switchTo().alert()
	    	alert.accept()
	    	
	})

})