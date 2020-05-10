let loginpage = function(){
	
	let usrname = element(by.name("username"))
	let pasword = element(by.name("password"))
	let loginbtn = element(by.css("input[value='Login']"))
	let logoutbtn = element(by.xpath("(//a[@class='topnavlink'])[3]"))
	
	
	
	this.get=function(url){
		browser.get(url)
		
	}
	
	this.setUsername = function(uname){
		usrname.sendKeys(uname)
		
	}
	
	this.setPasword = function(pwd){
		
		pasword.sendKeys(pwd)
		
		
	}
	
	this.clickloginBtn = function(){
		loginbtn.click()
		
	}
	
	this.clicklogoutBtn = function(){
		browser.switchTo().frame("mainpanel")
		logoutbtn.click()
		
	}
	
}
module.exports=new loginpage()

