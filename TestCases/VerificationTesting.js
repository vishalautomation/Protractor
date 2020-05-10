// spec.js
describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.manage().window().maximize();
      browser.get('https://angularjs.org/');
  
      expect(browser.getTitle()).toEqual('AngularJS — Superheroic JavaScript MVW Framework');
      console.log("Title test completed")
    });
});


  describe('Protractor Demo App', function() {
    it('Validate url', function() {
        browser.manage().window().maximize();
      browser.get('https://angularjs.org/');
  
      expect(browser.getCurrentUrl()).toEqual('https://angularjs.org/');
      console.log("Validate url test completed")
    });
  });